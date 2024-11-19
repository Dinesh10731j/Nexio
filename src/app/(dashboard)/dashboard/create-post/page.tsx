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
   
   <div className="dark:bg-gray-900 mt-32 md:mt-0 transition-colors duration-300 min-h-screen flex justify-center items-center">
  <main className="flex flex-col justify-center items-center w-full max-w-[400px] p-4 sm:p-6 lg:p-8">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white text-center">
      Create a New Post
    </h2>
    <div className="w-full">
      <Editorjs onInit={(editor) => (editorRef.current = editor)} />
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
