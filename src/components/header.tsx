"use client";
import React, { useState } from "react";
import { Switch } from "./ui/switch";
import { Input } from "./ui/input";
import Link from "next/link";
import { Menu } from "lucide-react";
import Nexio_Logo from "../assets/Nexio_Logo.png";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMode = (checked: boolean) => {
    setIsDarkMode(checked);
    console.log(checked ? "Dark mode on" : "Dark mode off");
  };

  return (
    <header className=" dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-evenly gap-7 items-center p-4">
        <Image src={Nexio_Logo} alt="nexio_logo" height={30} width={30} />
        <div className="text-xl font-bold text-blue-500">Nexio</div>

        <nav className="hidden md:flex gap-7 space-x-6 items-center">
          <Link
            href="/"
            className="text-gray-800 dark:text-white hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-800 dark:text-white hover:text-blue-500"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 dark:text-white hover:text-blue-500"
          >
            Contact
          </Link>
          <Link
            href=""
            className="text-gray-800 dark:text-white hover:text-blue-500"
          >
            Blogs
          </Link>
          <Link
            href=""
            className="text-gray-800 dark:text-white hover:text-blue-500"
          >
            Signup
          </Link>
        </nav>

        <Input placeholder="Search..." className="block w-52" />

        {/* Theme Switch */}
        <Switch
          checked={isDarkMode}
          onCheckedChange={handleMode}
          className=""
        />

        <div className="md:hidden">
          <Menu
            size={24}
            className="text-gray-800 dark:text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <Link
              href="/"
              className="text-gray-800 dark:text-white hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 dark:text-white hover:text-blue-500"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 dark:text-white hover:text-blue-500"
            >
              Contact
            </Link>
            <Link
              href=""
              className="text-gray-800 dark:text-white hover:text-blue-500"
            >
              Blogs
            </Link>
            <Link
              href=""
              className="text-gray-800 dark:text-white hover:text-blue-500"
            >
              Signup
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
