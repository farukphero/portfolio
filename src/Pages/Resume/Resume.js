// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";

// const Resume = () => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div className="md:w-9/12 mx-auto">
//       <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
    

//     </div>
//   );
// };

// export default Resume;
