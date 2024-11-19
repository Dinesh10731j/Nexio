"use client"
import React from 'react';
import Sidebar from '@/components/dashboardSidebar/dashoardSidebar';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div >
       
   
      <main className=''>
       
        <Sidebar>{children}</Sidebar>
     
      </main>
    </div>
  );
};

export default Layout;
