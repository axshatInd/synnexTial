import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

function RichDocumentEditor() {
  const ref = useRef();
  let editor;
  useEffect(() => {
    InitEditor();
  }, []);
  const InitEditor = () => {
    if (!editor?.current) {
      editor = new EditorJS({
        /**
         * Id of Element that should contain Editor instance
         */
        holder: "editorjs",
        tools: {},
      });
      ref.current = editor;
    }
  };
  return (
    <div className="w-full h-[calc(100vh-120px)] p-5 box-border flex items-center justify-center rounded-md">
      <div className="w-full h-full border border-gray-300 box-border p-2 overflow-auto rounded-md">
        <div id="editorjs"></div>
      </div>
    </div>
  );
}

export default RichDocumentEditor;
