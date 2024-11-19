"use client";
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import EditorJS from "@editorjs/editorjs";
import { UseCreateBlog } from '@/hooks/useCreateBlog';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';


const Editorjs = dynamic(() => import("@/components/EditorJs"), { ssr: false });
interface themeState {
  theme: string;
}

interface RootState {
  theme: themeState;
}
const CreatePost = () => {
  const editorRef = useRef<EditorJS | null>(null);
  const theme = useSelector((state:RootState)=>state.theme.theme)

const createBlogMutation = UseCreateBlog();
  const handlePublish = async () => {
    if (editorRef.current) {
      try {
        const savedData = await editorRef.current.save();
     
     createBlogMutation.mutate(savedData);
      } catch (error) {
        console.error('Saving failed: ', error);
      }
    }
  };

  return (
    <>
   
   
   <main className="flex flex-col items-center w-full max-w-[600px] mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white text-center">
        Create a New Post
      </h2>
     
        <Editorjs onInit={(editor) => (editorRef.current = editor)} />
      
      <Button
        onClick={handlePublish}
        className={`mt-6 w-full py-3 rounded-full text-white font-medium shadow-md transition-all duration-200 ${
          theme === "dark"
            ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
            : "bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
        }`}
      >
        Publish Post
      </Button>
    </main>


    </>
  );
};

export default CreatePost;
