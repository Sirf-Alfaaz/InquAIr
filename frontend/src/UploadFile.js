import React, { useState } from 'react';

function UploadFile() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8000/upload/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }

      const data = await response.json();
      setMessage(`Upload successful: ${JSON.stringify(data)}`);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Upload a PDF</h2>
      <input type="file" onChange={handleFileChange} accept="application/pdf" />
      <button onClick={handleUpload} style={{ marginTop: 10 }}>
        Upload
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UploadFile;
