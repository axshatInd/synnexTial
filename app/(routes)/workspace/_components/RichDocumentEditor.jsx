import React, { useRef } from "react";
import EditorJS from "@editorjs/editorjs";

function RichDocumentEditor() {
  const ref = useRef();
  let editor;
  const InitEditor = () => {
    if (!editor.current) {
      editor = new EditorJS({
        /**
         * Id of Element that should contain Editor instance
         */
        holder: "editorjs",
      });
      ref.current = editor;
    }
  };
  return (
    <div className="px-20 ml-10">
      <div id="editorjs"></div>
    </div>
  );
}

export default RichDocumentEditor;
