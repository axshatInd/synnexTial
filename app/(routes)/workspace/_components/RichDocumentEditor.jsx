"use client";

import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import Warning from "@editorjs/warning";
import ToggleBlock from "editorjs-toggle-block";
import Paragraph from "@editorjs/paragraph"; // Import the Paragraph tool
import Alert from "editorjs-alert";
import Title from "title-editorjs";
import List from "@editorjs/list";
import NestedList from "@editorjs/nested-list";
import Checklist from "@editorjs/checklist";

function RichDocumentEditor() {
  const editorRef = useRef(null);

  useEffect(() => {
    // Initialize Editor.js only on the client side
    const editor = new EditorJS({
      holder: "editorjs",
      tools: {
        header: Header,
        delimiter: {
          class: Delimiter,
          config: {
            styleOptions: ["star", "dash", "line"],
            defaultStyle: "star",
            lineWidthOptions: [8, 15, 25, 35, 50, 60, 100],
            defaultLineWidth: 25,
            lineThicknessOptions: [1, 2, 3, 4, 5, 6],
            defaultLineThickness: 2,
          },
        },
        title: Title,

        list: {
          class: NestedList,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },

        warning: {
          class: Warning,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+W",
          config: {
            titlePlaceholder: "Title",
            messagePlaceholder: "Message",
          },
        },
        alert: {
          class: Alert,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+A",
          config: {
            alertTypes: [
              "primary",
              "secondary",
              "info",
              "success",
              "warning",
              "danger",
              "light",
              "dark",
            ],
            defaultType: "primary",
            messagePlaceholder: "Enter something",
          },
        },

        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        toggle: {
          class: ToggleBlock,
          inlineToolbar: true,
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
      },
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
    <div className="w-full h-[calc(100vh-120px)] p-5 box-border flex items-center justify-center rounded-md">
      <div className="w-full h-full border border-gray-300 box-border p-2 overflow-auto rounded-md">
        <div id="editorjs"></div>
      </div>
    </div>
  );
}

export default RichDocumentEditor;
