"use client"
import { useState } from "react";
import Link from "next/link";
import { Home, Plus, User, Menu, X,FileText} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-gray-800 text-gray-100 h-full transition-width duration-300 mt-14 fixed lg:relative`}
      >
        {/* Logo and Toggle */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">{isOpen ? "Nexio" : "N"}</span>
          </Link>
          <button onClick={toggleSidebar} className="lg:hidden text-gray-400">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Links */}
        <nav className="mt-5 space-y-4">
          <Link href="/dashboard" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 transition">
            <Home size={20} />
            {isOpen && <span>Dashboard</span>}
          </Link>
          <Link href="/dashboard/create-post" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 transition">
            <Plus size={20} />
            {isOpen && <span>Create Post</span>}
          </Link>
          <Link href="/dashboard/profile" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 transition">
            <User size={20} />
            {isOpen && <span>Profile</span>}
          </Link>

          <Link href="/dashboard/posts" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 transition">
            <FileText size={20} />
            {isOpen && <span>Post</span>}
          </Link>
        </nav>
      </div>

     
    </div>
  );
};

export default Sidebar;
