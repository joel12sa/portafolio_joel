import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdfFile from "../../Assests/CV_JOELSASIG.pdf"; // Ruta correcta del PDF

const PdfViewer = () => {
  return (
    <div className="resume-section">
      <div className="resume">
        <a href={pdfFile} download>
          <button className="download-btn fork-btn-inner">Descargar PDF</button>
        </a>
        <div className="pdf-viewer-container">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfFile} />
          </Worker>
        </div>
        <a href={pdfFile} download>
          <button className="download-btn download-btn-bottom fork-btn-inner">
            Descargar PDF
          </button>
        </a>
      </div>
    </div>
  );
};

export default PdfViewer;
