import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";

import Header from "@editorjs/header";
import Warning from "@editorjs/warning";
import Delimiter from "@editorjs/delimiter";
import Alert from "editorjs-alert";
import ToggleBlock from "editorjs-toggle-block";
import List from "@editorjs/list"; // import List from "@editorjs/list";
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
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { useUser } from "@clerk/nextjs";
import { render } from "@headlessui/react/dist/utils/render";

function RichDocumentEditor({ params }) {
  const ref = useRef();
  let editor;
  const { user } = useUser();
  const [documentOutput, setDocumentOutput] = useState([]);
  let isFetched = false;
  useEffect(() => {
    user && InitEditor();
  }, [user]);

  // useEffect(() => {
  //   params && GetDocumentOutput();
  // }, [params]);
  {
    /* Used to Save Document */
  }
  const SaveDocument = () => {
    ref.current.save().then(async (outputData) => {
      const docRef = doc(db, "documentOutput", params?.documentid);
      await updateDoc(docRef, {
        output: outputData,
        editedBy: user?.primaryEmailAddress?.emailAddress,
      });
    });
  };

  const GetDocumentOutput = () => {
    const unsubscribe = onSnapshot(
      doc(db, "documentOutput", params?.documentid),
      (doc) => {
        if (
          isFetched == false ||
          doc.data()?.editedBy != user?.primaryEmailAddress?.emailAddress
        )
          doc.data()?.output && editor.render(doc.data()?.output);
        isFetched = true;
      }
    );
  };
  const InitEditor = () => {
    if (!editor?.current) {
      editor = new EditorJS({
        onChange: (ap, event) => {
          SaveDocument();
        },
        onReady: () => {
          GetDocumentOutput();
        },
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

          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
          nestedchecklist: editorjsNestedChecklist,
          toggle: {
            class: ToggleBlock,
            inlineToolbar: true,
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

          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
                byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
              },
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
