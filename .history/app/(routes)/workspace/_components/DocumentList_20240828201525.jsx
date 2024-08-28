import React from "react";

function DocumentList({ documentList }) {
  return (
    <div>
      {documentList.map((doc, index) => (
        <div>
          <div>
            <h2>{doc.documentName}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DocumentList;
