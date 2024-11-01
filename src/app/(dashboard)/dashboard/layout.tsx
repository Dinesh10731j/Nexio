import React from 'react';
import Sidebar from '@/components/dashboardSidebar/dashoardSidebar';
import DashboardHeader from '@/components/dashboardHeader/dashboardHeader';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div >
        <DashboardHeader/>
   
      <main className='flex'>
      <Sidebar/>
        {children}
      </main>
    </div>
  );
};

export default Layout;
