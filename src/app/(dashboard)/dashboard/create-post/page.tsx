'use client';

import Sidebar from '@/components/dashboardSidebar/dashoardSidebar';
import DashboardHeader from '@/components/dashboardHeader/dashboardHeader';
import { Button } from '@/components/ui/button';


const CreatePost = () => {


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
            <div
              id="editorjs"
              className="border w-[300px] border-gray-300 p-2 mx-auto h-[400px] max-w-[600px] md:w-[80%] lg:w-[600px]"
            ></div>
            <Button
            
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
