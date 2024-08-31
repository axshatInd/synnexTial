import React from "react";
import DocumentHeader from "./DocumentHeader";
import DocumentInfo from "./DocumentInfo";

function DocumentEditorSection() {
  return (
    <div>
      {/* Header section with share button, etc */}
      <DocumentHeader />

      {/* Document Info */}
      <DocumentInfo />

      {/* Rich Text Editor */}
    </div>
  );
}

export default DocumentEditorSection;
