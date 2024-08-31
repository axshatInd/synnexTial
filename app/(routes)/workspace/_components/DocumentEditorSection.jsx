import React from "react";
import DocumentHeader from "./DocumentHeader";
import DocumentInfo from "./DocumentInfo";

function DocumentEditorSection({ params }) {
  return (
    <div>
      {/* Header section with share button, etc */}
      <DocumentHeader />

      {/* Document Info */}
      <DocumentInfo params={params} />

      {/* Rich Text Editor */}
    </div>
  );
}

export default DocumentEditorSection;
