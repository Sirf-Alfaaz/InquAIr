from fastapi import FastAPI, UploadFile, Form, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from app.pdf_utils import extract_text_from_pdf, extract_images_from_pdf
from app.gemini_engine import summarize_text, extract_tags, answer_question, analyze_image
import os
import shutil

app = FastAPI()

# Allow React frontend to access this backend
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Store extracted data
DOCUMENT_TEXT = ""
SUMMARY = ""
TAGS = []
UPLOADED_PDF_PATH = ""

# Serve uploaded PDF and image files
if not os.path.exists("static/uploads"):
    os.makedirs("static/uploads")
if not os.path.exists("temp_images"):
    os.makedirs("temp_images")

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.post("/upload/")
async def upload(file: UploadFile):
    global DOCUMENT_TEXT, SUMMARY, TAGS, UPLOADED_PDF_PATH

    file_path = os.path.join("static/uploads", file.filename)
    UPLOADED_PDF_PATH = file_path

    # Save the uploaded file
    with open(file_path, "wb") as f:
        f.write(await file.read())

    # Extract text
    DOCUMENT_TEXT = extract_text_from_pdf(file_path)

    # Generate summary and tags
    SUMMARY = summarize_text(DOCUMENT_TEXT)
    TAGS = extract_tags(DOCUMENT_TEXT).split("\n")

    # Extract and analyze images
    image_paths = extract_images_from_pdf(file_path)
    image_insights = []
    for path in image_paths:
        try:
            insight = analyze_image(path)
            image_insights.append({"image": path, "insight": insight})
            os.remove(path)  # cleanup
        except Exception as e:
            image_insights.append({"image": path, "insight": f"Error: {e}"})

    return {
        "summary": SUMMARY,
        "tags": TAGS,
        "image_insights": image_insights,
        "pdf_url": f"/static/uploads/{os.path.basename(file_path)}"
    }


@app.get("/get-data/")
def get_data():
    return {
        "summary": SUMMARY,
        "tags": TAGS,
        "pdf_url": f"/static/uploads/{os.path.basename(UPLOADED_PDF_PATH)}"
    }


@app.post("/ask/")
async def ask(request: Request):
    global DOCUMENT_TEXT
    data = await request.json()
    question = data.get("question", "")

    if not DOCUMENT_TEXT:
        return {"error": "Please upload a document first."}
    
    answer = answer_question(DOCUMENT_TEXT, question)
    return {"answer": answer}
