"use client";

import React, { useEffect, useRef } from 'react';
import EditorJS from "@editorjs/editorjs";
import ImageTool from "@editorjs/image";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";

interface EditorjsProps {
  onInit: (editor: EditorJS) => void;
}

const Editorjs: React.FC<EditorjsProps> = ({ onInit }) => {
  const editorInstanceRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (editorInstanceRef.current) {
      return; 
    }

    const editor = new EditorJS({
      holder: 'editorjs',
      tools: {
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          config: {
            placeholder: "Start writing blog....",
          },
        },
        list: List,
        image: ImageTool,
      },
      autofocus: true,
      data: {
        blocks: [
          {
            type: "paragraph",
            data: {
              text: "",
            },
          },
        ],
      },
    });

    editorInstanceRef.current = editor;
    onInit(editor);

    return () => {
      if (editorInstanceRef.current?.destroy) {
        editorInstanceRef.current.destroy();
        editorInstanceRef.current = null;
      }
    };
  }, [onInit]);

  return <div id="editorjs"></div>;
};

export default Editorjs;
