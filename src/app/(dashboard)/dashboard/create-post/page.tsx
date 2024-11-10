"use client";
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import EditorJS from "@editorjs/editorjs";
import { UseCreateBlog } from '@/hooks/useCreateBlog';
import dynamic from 'next/dynamic';
const Editorjs = dynamic(() => import("@/components/EditorJs"), { ssr: false });
const CreatePost = () => {
  const editorRef = useRef<EditorJS | null>(null);
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
   
      <div className="flex min-h-screen items-center justify-center w-screen dark:bg-gray-900 flex-col transition-colors duration-300">
       
        
          <main className="flex-1 h-[100vh] w-[100%] p-4 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Create a New Post
            </h2>
            <div className="w-80 ml-10 md:ml-0 md:w-full px-4 sm:px-6 lg:px-8">
              <Editorjs  onInit={(editor) => (editorRef.current = editor)} />
            </div>
            <Button
              onClick={handlePublish}
              className="mt-4 z-20 cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Publish Post
            </Button>
          </main>
        
      </div>
    </>
  );
};

export default CreatePost;
