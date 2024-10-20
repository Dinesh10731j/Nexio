'use client'
import React, { useState } from 'react';
import { Switch } from './ui/switch';
import { Input } from './ui/input';
import Link from 'next/link';
import { Menu } from 'lucide-react'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-evenly gap-7 items-center p-4">
        {/* Logo or Brand */}
        <div className="text-xl font-bold">Nexio</div>

        {/* Menu Items */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/home" className="text-gray-800 dark:text-white hover:text-blue-500">Home</Link>
          <Link href="/about" className="text-gray-800 dark:text-white hover:text-blue-500">About</Link>
          <Link href="/contact" className="text-gray-800 dark:text-white hover:text-blue-500">Contact</Link>
        </nav>

        {/* Search Input */}
        <Input placeholder="Search..." className="block w-52" />

        {/* Theme Switch */}
        <Switch />

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Menu size={24} className="text-gray-800 dark:text-white cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <a href="#home" className="text-gray-800 dark:text-white hover:text-blue-500">Home</a>
            <a href="#about" className="text-gray-800 dark:text-white hover:text-blue-500">About</a>
            <a href="#contact" className="text-gray-800 dark:text-white hover:text-blue-500">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
