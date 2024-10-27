'use client';

import Sidebar from '@/components/dashboardSidebar/dashoardSidebar';
import DashboardHeader from '@/components/dashboardHeader/dashboardHeader';
import { Button } from '@/components/ui/button';
import ReactQuillEditor from '@/components/ReactQuill';
import { SetStateAction, useState } from 'react';
import { UseCreateBlog } from '@/hooks/useCreateBlog';

const CreatePost = () => {
    
  const [content, setContent] = useState('');
const createPostMutation = UseCreateBlog();
  const handleContentChange = (value: SetStateAction<string>) => {
    setContent(value);
  };

  const handlePublish = () => {
    createPostMutation.mutate(content);
  };

  return (
    <>
      <DashboardHeader />
      <div className="flex flex-col transition-colors duration-300">
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Create a New Post
            </h2>
            <div className="w-80 ml-10 md:ml-0 md:w-full px-4 sm:px-6 lg:px-8">
              <ReactQuillEditor value={content} onChange={handleContentChange} />
            </div>
            <Button
              onClick={handlePublish}
              className="mt-4 z-20 cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Publish Post
            </Button>
          </main>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
