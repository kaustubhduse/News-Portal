import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the worker URL for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const MyPdfViewer = ({ pdfUrl }) => {
  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default MyPdfViewer;
