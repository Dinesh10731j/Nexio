"use client"
import { useState } from "react";
import Link from "next/link";
import { Home, Plus, User, Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-gray-800 text-gray-100 h-full transition-width duration-300 fixed lg:relative`}
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
          <Link href="/createpost" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 transition">
            <Plus size={20} />
            {isOpen && <span>Create Post</span>}
          </Link>
          <Link href="/profile" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 transition">
            <User size={20} />
            {isOpen && <span>Profile</span>}
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-margin duration-300 ${
          isOpen ? "ml-64" : "ml-20"
        } p-5 lg:ml-20`}
      >
        <h1 className="text-2xl font-semibold text-gray-800">Welcome to Nexio!</h1>
        {/* Add main content here */}
      </div>
    </div>
  );
};

export default Sidebar;
