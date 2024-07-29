import { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
import "./App.css"; 

// pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

function MyApp() {
  const [file, setFile] = useState("https://pdfobject.com/pdf/sample.pdf");
  const [numPages, setNumPages] = useState(null);
  const [citations, setCitations] = useState([]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    // Giả sử bạn có một hàm extractCitations để lấy danh sách các citation từ PDF
    // const extractedCitations = extractCitations();
    // setCitations(extractedCitations);
  }

  return (
    <div className="app-container">
      <div className="upload-container">
        <label className="upload-button" htmlFor="file-upload">
          Choose File
        </label>
        <input
          id="file-upload"
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
          style={{ display: "none" }}
        />
      </div>
      <div className="content-container">
        <div className="pdf-viewer">
          <iframe src={file} width="100%" height="100%" title="PDF Document" />
        </div>
        <div className="citation-list">
          <h3>Citations:</h3>
          <ul>
            {citations.map((citation, index) => (
              <li key={index}>{citation}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
