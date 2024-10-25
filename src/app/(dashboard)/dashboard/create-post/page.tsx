
"use client"
import Sidebar from '@/components/dashboardSidebar/dashoardSidebar';
import DashboardHeader from '@/components/dashboardHeader/dashboardHeader';


const CreatePost = () => {


 

  return (
    <>
          <DashboardHeader/>
    <div className={`min-h-screen flex flex-col transition-colors duration-300`}>

    
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Create a New Post</h2>
          <textarea
            className="w-full h-64 p-4 border rounded-md dark:bg-gray-700 dark:text-gray-200"
            placeholder="Write your post content here..."
          />
          {/* Later, you can integrate Editor.js or any other editor component */}
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Publish Post
          </button>
        </main>
      </div>
    </div>
    </>
  );
};

export default CreatePost;
