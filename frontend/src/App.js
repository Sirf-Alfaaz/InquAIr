import React, { useState } from 'react';
import SummaryTags from './components/SummaryTags';
import PDFViewer from './components/PDFViewer';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  const [pdfUrl, setPdfUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);

    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:8000/upload/", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setSummary(data.summary);
      setTags(data.tags);
      setPdfUrl(`http://localhost:8000${data.pdf_url}`);
    } catch (error) {
      console.error("Upload failed", error);
      alert("Failed to upload. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="header">
        <span className="inqu">inqu</span>
        <span className="ai">AI</span>
        <span className="r">r</span>
      </div>

      {/* Main Layout */}
      <div className="app-container">
        <div className="left-panel">
          <SummaryTags summary={summary} tags={tags} />
        </div>
        <div className="center-panel">
          <PDFViewer
            pdfUrl={pdfUrl}
            handleUpload={handleUpload}
            isLoading={isLoading}
          />
        </div>
        <div className="right-panel">
          <Chatbot />
        </div>
      </div>
    </>
  );
}

export default App;
