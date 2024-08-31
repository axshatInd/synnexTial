import React from "react";
import DocumentHeader from "./DocumentHeader";
import DocumentInfo from "./DocumentInfo";

function DocumentEditorSection() {
  return (
    <div>
      {/* Document Info */}
      <DocumentInfo />
      {/* Header section with share button, etc */}
      <DocumentHeader />

      {/* Rich Text Editor */}
    </div>
  );
}

export default DocumentEditorSection;
