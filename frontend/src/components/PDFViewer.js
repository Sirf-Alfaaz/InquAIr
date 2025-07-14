/*import React from 'react';

function PDFViewer({ pdfUrl, handleUpload, isLoading }) {
  return (
    <div style={{ width: "100%", height: "100%", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {isLoading ? (
        <div>
          <h2 style={{ fontFamily: 'Playfair Display' }}>Processing PDF...</h2>
          <div className="spinner" />
        </div>
      ) : pdfUrl ? (
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      ) : (
        <div>
          <h2 style={{ fontFamily: 'Playfair Display' }}>Upload a PDF</h2>
          <input
            type="file"
            accept=".pdf"
            onChange={handleUpload}
            style={{ padding: "8px", marginTop: "12px", fontFamily: "Inter" }}
          />
        </div>
      )}
    </div>
  );
}

export default PDFViewer;*/

import React from 'react';

function PDFViewer({ pdfUrl, handleUpload, isLoading }) {
  return (
    <div style={{ width: "100%", height: "100%", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {isLoading ? (
        <div>
          <h2 style={{ fontFamily: 'Playfair Display' }}>Processing PDF...</h2>
          <div className="spinner" />
        </div>
      ) : pdfUrl ? (
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      ) : (
        <div>
          <h2 style={{ fontFamily: 'Playfair Display' }}>Upload a PDF</h2>
          <input
            type="file"
            accept=".pdf"
            onChange={handleUpload}
            style={{ padding: "8px", marginTop: "12px", fontFamily: "Inter" }}
          />
        </div>
      )}
    </div>
  );
}

export default PDFViewer;

