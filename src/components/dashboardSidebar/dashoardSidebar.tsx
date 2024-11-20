"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import { Home, Plus, User, Menu, X, FileText } from "lucide-react";
import { useSelector} from "react-redux";

interface SidebarProps {
  children: ReactNode;
}

interface ThemeState {
  theme: string;
}

interface RootState {
  theme: ThemeState;
}


const Sidebar = ({ children }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme  = useSelector((state:RootState)=>state.theme.theme)

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
 
     <div className="flex ">
      <div
        className={`${
          isOpen ? "w-60" : "w-20"
        } bg-gray-800 text-gray-100  min-h-screen lg:min-h-screen transition-width duration-300 fixed lg:relative`}
      >
        {/* Logo and Toggle */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">{isOpen ? "Nexio" : "N"}</span>
          </Link>
          <button onClick={toggleSidebar} className="hidden lg:block md:block text-gray-400">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Links */}
        <nav className="mt-5 space-y-4">
          <Link
            href="/dashboard"
            className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 transition"
          >
            <Home size={20} />
            {isOpen && <span>Dashboard</span>}
          </Link>
          <Link
            href="/dashboard/create-post"
            className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 transition"
          >
            <Plus size={20} />
            {isOpen && <span>Create Post</span>}
          </Link>
          <Link
            href="/dashboard/profile"
            className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 transition"
          >
            <User size={20} />
            {isOpen && <span>Profile</span>}
          </Link>
          <Link
            href="/dashboard/posts"
            className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 transition"
          >
            <FileText size={20} />
            {isOpen && <span>Post</span>}
          </Link>
        </nav>
      </div>

      {/* Main content area */}
      <div
        className={`flex  ${theme === 'dark'?"bg-gray-900" : "bg-gray-100"} min-h-screen w-full items-center justify-center  transition-all duration-300 lg:ml-3`}
      >
       

        {children}
      </div>
      </div>
   
  );
};

export default Sidebar;
