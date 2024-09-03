import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

import Header from "@editorjs/header";
import Warning from "@editorjs/warning";
import Delimiter from "@editorjs/delimiter";
import Alert from "editorjs-alert";
import ToggleBlock from "editorjs-toggle-block";
import List from "@editorjs/list";
import NestedList from "@editorjs/nested-list";

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
        tools: {
          header: Header,
          warning: {
            class: Warning,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+W",
            config: {
              titlePlaceholder: "Title",
              messagePlaceholder: "Message",
            },
          },

          delimiter: Delimiter,

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

          toggle: {
            class: ToggleBlock,
            inlineToolbar: true,
          },

          list: {
            class: NestedList,
            inlineToolbar: true,
            config: {
              defaultStyle: "unordered",
            },
          },
        },
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
