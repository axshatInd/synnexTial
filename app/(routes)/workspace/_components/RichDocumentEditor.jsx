"use client";

import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import Warning from "@editorjs/warning";
import ToggleBlock from "editorjs-toggle-block";
import Paragraph from "@editorjs/paragraph";
import Alert from "editorjs-alert";
import Title from "title-editorjs";
import List from "@editorjs/list";
import NestedList from "@editorjs/nested-list";
import Checklist from "@editorjs/checklist";
import editorjsNestedChecklist from "@calumk/editorjs-nested-checklist";
import ImageTool from "@editorjs/image";
import SimpleImage from "@editorjs/simple-image";
import LinkTool from "@editorjs/link";
import AttachesTool from "@editorjs/attaches";
import Table from "@editorjs/table";
import CodeTool from "@editorjs/code";
import RawTool from "@editorjs/raw";
import CodeBox from "@bomdi/codebox";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import Undo from "editorjs-undo"; // Import the Undo plugin

function RichDocumentEditor() {
  const editorRef = useRef(null);

  useEffect(() => {
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
        inlineCode: {
          class: InlineCode,
          shortcut: "CMD+SHIFT+M",
        },
        codeBox: {
          class: CodeBox,
          config: {
            themeURL:
              "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css", // Optional
            themeName: "atom-one-dark", // Optional
            useDefaultTheme: "light", // Optional. This also determines the background color of the language select drop-down
          },
        },
        Marker: {
          class: Marker,
          shortcut: "CMD+SHIFT+M",
        },
        raw: RawTool,
        code: CodeTool,
        attaches: {
          class: AttachesTool,
          config: {
            endpoint: "http://localhost:8008/uploadFile",
          },
        },
        image: SimpleImage,
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
        linkTool: {
          class: LinkTool,
          config: {
            endpoint: "http://localhost:8008/fetchUrl", // Your backend endpoint for url data fetching,
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
        nestedchecklist: editorjsNestedChecklist,
        toggle: {
          class: ToggleBlock,
          inlineToolbar: true,
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
              byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
            },
          },
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
      },
      onReady: () => {
        new Undo({ editor }); // Initialize the Undo plugin
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
