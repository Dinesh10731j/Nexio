'use client'

import Sidebar from '@/components/dashboardSidebar/dashoardSidebar';
import DashboardHeader from '@/components/dashboardHeader/dashboardHeader';

const Dashboard = () => {

  return (
   <>
   <DashboardHeader/>
   <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Welcome to the Dashboard</h2>
          <p className="text-gray-600 dark:text-gray-300">Your content goes here...</p>
        </main>
      </div>
   </>
     
      
    
  );
};

export default Dashboard;
