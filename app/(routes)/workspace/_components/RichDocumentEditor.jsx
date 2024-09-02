import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

function RichDocumentEditor() {
  const editorRef = useRef(null);

  useEffect(() => {
    // Initialize Editor.js only on the client side
    const editor = new EditorJS({
      holder: "editorjs",
    });

    editorRef.current = editor;

    return () => {
      // Clean up Editor.js instance when the component unmounts
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="px-20 ml-10">
      <div id="editorjs"></div>
    </div>
  );
}

export default RichDocumentEditor;
