# InquAIr - AI-Powered PDF Assistant

InquAIr is a smart web-based PDF analysis tool powered by Google Gemini AI. It allows users to upload PDF documents, view them in-browser, get a summarized overview, auto-extract insightful tags, and ask questions related to the content—all from a sleek, intuitive interface.
<img width="940" height="469" alt="image" src="https://github.com/user-attachments/assets/f635dbbe-025e-4a4f-a8ee-92b8f840b785" />
## 🚀 Features

* 📄 **PDF Upload & Preview** – Easily upload and view PDFs right in the browser.
* 🧠 **AI-Powered Summarization** – Get concise document summaries using Google Gemini.
* 🔖 **Clickable Tags** – Extract hashtags and keywords from content to quickly identify themes.
* <img width="598" height="341" alt="image" src="https://github.com/user-attachments/assets/22a2bc33-a1ae-4a6d-b6b5-d5b64b3555c3" />

* ✨ **Highlight in PDF** – Click a tag and instantly highlight related text in the PDF viewer.
* 🤖 **Chat-Based Q\&A** – Ask questions from the document and receive intelligent answers.
* <img width="791" height="1364" alt="image" src="https://github.com/user-attachments/assets/8c8b47f4-7515-42bb-b39e-2bb694addac3" />

* 📷 **Image Insight Extraction** – Auto-detect and analyze images inside the PDF (if any).

## 🖼️ Demo

<img width="940" height="469" alt="image" src="https://github.com/user-attachments/assets/f635dbbe-025e-4a4f-a8ee-92b8f840b785" />



## 💠 Tech Stack

**Frontend**

* React.js
* react-pdf
* CSS (custom & modular)

**Backend**

* FastAPI
* Google Generative AI (Gemini API)
* pdfplumber (for text & image extraction)
* PIL (for image handling)

## 📁 Project Structure

```
inquAIr/
│
├── app/
│   ├── gemini_engine.py       # Handles AI tasks (summarization, tags, QA)
│   ├── pdf_utils.py           # PDF parsing utilities
│
├── static/uploads/            # Uploaded PDF storage
├── temp_images/               # Temporary extracted images
├── main.py                    # FastAPI backend entrypoint
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── PDFViewer.jsx
    │   │   ├── SummaryTags.jsx
    │   │   ├── Chatbot.jsx
    │   ├── App.js
    │   └── App.css
```

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/inquair.git
cd inquair
```

### 2. Backend (FastAPI + Gemini)

```bash
cd backend/
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt

# Create a .env file and add your Gemini API Key
GOOGLE_API_KEY=your_api_key_here

uvicorn main:app --reload
```

### 3. Frontend (React)

```bash
cd frontend/
npm install
npm start
```

The app will run on:

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend: [http://localhost:8000](http://localhost:8000)

## ✅ To-Do (Upcoming)

* 🔄 Convert PDF to Word
* 🗂️ Document bookmarking and history
* 🌐 Deploy on cloud
* 🔐 JWT authentication
* 📊 Add visual data insights

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ by [Pratham](https://github.com/yourusername)**
