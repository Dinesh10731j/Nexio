"use client";

import React, { useState, useEffect } from "react";
import { Switch } from "./ui/switch";
import { Input } from "./ui/input";
import Link from "next/link";
import { Menu } from "lucide-react";
import Nexio_Logo from "../assets/Nexio_Logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/slices/themeSlice";

interface themeState {
  theme: string;
}

interface RootState {
  theme: themeState;
}

const Header = () => {
  const activeLink = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMode = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header
      className={` ${
        theme === "dark" ? "dark:bg-gray-900" : "bg-white"
      } shadow-md`}
    >
      <div className="container mx-auto flex justify-evenly gap-7 items-center p-4">
      <Image
          src={Nexio_Logo}
          alt="nexio_logo"
          height={30}
          width={30}
          className={theme === "dark" ? "filter invert" : ""}
        />
        <div className="text-xl font-bold text-blue-500">Nexio</div>

        <nav className="hidden md:flex gap-7 space-x-6 items-center">
          <Link
            href="/"
            className={`${
              activeLink === "/" ? "text-blue-500" : "text-gray-800"
            } dark:text-white hover:text-blue-500`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              activeLink === "/about" ? "text-blue-500" : "text-gray-800"
            } dark:text-white hover:text-blue-500`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${
              activeLink === "/contact" ? "text-blue-500" : "text-gray-800"
            } dark:text-white hover:text-blue-500`}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className={`${
              activeLink === "/blog" ? "text-blue-500" : "text-gray-800"
            } dark:text-white hover:text-blue-500`}
          >
            Blogs
          </Link>
          <Link
            href="/signup"
            className={`${
              activeLink === "/signup" ? "text-blue-500" : "text-gray-800"
            } dark:text-white hover:text-blue-500`}
          >
            Signup
          </Link>
        </nav>
{/* Input field */}
        <Input
    placeholder="Search..."
    className={`block w-52 mt-1 p-2 rounded-md shadow-sm ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-gray-300 placeholder-gray-500' : 'border-gray-300 bg-white text-gray-800 placeholder-gray-500'} focus:ring-blue-500 focus:border-blue-500`}
  />

        {/* Theme Switch */}
        <Switch checked={theme === "dark"} onCheckedChange={handleMode} />

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
              href="/blog"
              className="text-gray-800 dark:text-white hover:text-blue-500"
            >
              Blogs
            </Link>
            <Link
              href="/signup"
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
