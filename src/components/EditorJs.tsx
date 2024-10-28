"use client";

import React, { useEffect, useRef } from "react";
import EditorJS, { ToolConstructable } from "@editorjs/editorjs";
import ImageTool from "@editorjs/image";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import Table from "@editorjs/table";
import { UseUploadToCloudinary } from "@/hooks/useUploadImageToCloudinary";

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
      holder: "editorjs",
      tools: {
        header: {
          class: Header as unknown as ToolConstructable,
          inlineToolbar: true,
          config: {
            placeholder: "Enter your blog title",
            levels: [1],
            defaultLevel: 1,
          },
        },
        image: {
          class: ImageTool as ToolConstructable,
          config: {
            uploader: {
             
              async uploadByFile(file: File) {
                try {
                  const url = await UseUploadToCloudinary(file);
                  return {
                    success: 1,
                    file: {
                      url, 
                    },
                  };
                } catch (error) {
                  console.error("Image upload failed:", error);
                  return { success: 0, message: "Image upload failed. Try again." };
                }
              },
            },
          },
        },
        paragraph: {
          class: Paragraph as ToolConstructable,
          inlineToolbar: true,
          config: {
            placeholder: "Write your blog content here...",
          },
        },
        list: List,
        table: Table,
      },
      autofocus: true,
      data: {
        blocks: [
          {
            type: "header",
            data: {
              level: 1,
              text: "Enter your blog title",
            },
          },
          {
            type: "image",
            data: {
              file: {
                url: "", 
              },
              caption: "Write a caption",
              withBorder: true,
              stretched: true,
              withBackground: true,
            },
          },
          {
            type: "paragraph",
            data: {
              text: "Write the main content of your blog here...",
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
