"use client"; 

import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { Menu, Moon, Sun,XIcon } from "lucide-react";
import Nexio_Logo from "../assets/Nexio_Logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/slices/themeSlice";
import { Button } from "./ui/button";
import { motion, useAnimation } from "framer-motion";


interface ThemeState {
  theme: string;
}

interface RootState {
  theme: ThemeState;
}

const Header = () => {
  const activeLink = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false); // To ensure client-side rendering

  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);


  const controls = useAnimation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMode = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
  
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);

        requestAnimationFrame(() => {
          controls.start({
            backgroundColor: theme === "dark" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
            y: 0,
            scale: 1.05,
            transition: { duration: 0.3 },
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          });
        });
      } else {
        setIsScrolled(false);

        requestAnimationFrame(() => {
          controls.start({
            backgroundColor: "rgba(0, 0, 0, 0)",
            transition: { duration: 0.7 },
            boxShadow: "none",
          });
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  if (!mounted) return null; 

  return (
    <motion.header
      animate={controls}
      className={`fixed top-0 left-0 w-full z-50 ${
        theme === "dark" ? "dark:bg-gray-900" : "bg-white"
      } ${isScrolled ? "backdrop-blur-md" : ""}`}
    >
      <div className="container mx-auto flex justify-evenly gap-1 md:gap-7 items-center p-4">
        <Image
          src={Nexio_Logo}
          alt="nexio_logo"
          height={30}
          width={30}
          className={theme === "dark" ? "filter invert" : ""}
        />
        <div   className={`text-2xl hidden md:block col-span-full text-center ${theme === "dark" 
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:from-blue-500 hover:to-purple-500" 
              : "bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text hover:from-blue-600 hover:to-teal-600"}`}>Nexio</div>

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

        <Input
          placeholder="Search..."
          className={`block w-52 mt-1 p-2 rounded-md shadow-sm ${
            theme === "dark"
              ? "border-gray-600 bg-gray-700 text-gray-300 placeholder-gray-500"
              : "border-gray-300 bg-white text-gray-800 placeholder-gray-500"
          } focus:ring-blue-500 focus:border-blue-500`}
        />

        <Button onClick={handleMode}>
          {theme === "dark" ? (
            <Sun className="text-orange-300" />
          ) : (
            <Moon className="text-gray-600" />
          )}
        </Button>

       

        <div className="md:hidden">
          <Menu
            size={24}
            className="text-gray-800 dark:text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          className="md:hidden fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 shadow-md z-50"
        >
          <motion.nav
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col items-center space-y-4 p-4"
          >
            <motion.div>
              <Link href="/" className="text-gray-800 dark:text-white hover:text-blue-500">
                Home
              </Link>
            </motion.div>
            <motion.div>
              <Link href="/about" className="text-gray-800 dark:text-white hover:text-blue-500">
                About
              </Link>
            </motion.div>
            <motion.div>
              <Link href="/contact" className="text-gray-800 dark:text-white hover:text-blue-500">
                Contact
              </Link>
            </motion.div>
            <motion.div>
              <Link href="/blog" className="text-gray-800 dark:text-white hover:text-blue-500">
                Blogs
              </Link>
            </motion.div>
            <motion.div>
              <Link href="/signup" className="text-gray-800 dark:text-white hover:text-blue-500">
                Signup
              </Link>
            </motion.div>
          </motion.nav>
          <XIcon className="top-4 right-2 fixed cursor-pointer text-red-700" onClick={() => setIsOpen(false)} />
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
