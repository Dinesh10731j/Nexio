"use client";
import React, { useRef } from "react";
import Image from "next/image";
import frontImg from "../../../assets/Image.png";
import { useSelector } from "react-redux";
import { UseAllBlogs } from "@/hooks/useBlogs";
import Link from "next/link";
import { Timer } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";


interface themeState {
  theme: string;
}

interface RootState {
  theme: themeState;
}

const Home = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { data: allBlogs, isLoading } = UseAllBlogs();

  const username = Cookies.get('username');

  // Refs for animations
  const heroRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Visibility check
  const isHeroInView = useInView(heroRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true });

  // Skeleton Loader Component
  const SkeletonLoader = () => (
    <div className="p-4 rounded-xl shadow-xl">
      <Skeleton className="h-40 w-full rounded-lg mb-4 bg-gray-400" />
      <Skeleton className="h-6 w-3/4 rounded-md mb-2 bg-gray-400" />
      <Skeleton className="h-4 w-1/2 rounded-md mb-2 bg-gray-400" />
      <Skeleton className="h-4 w-1/3 rounded-md mb-4 bg-gray-400" />
      <Skeleton className="h-8 w-full rounded-md bg-gray-400" />
    </div>
  );

  // Function to render the image with properties
  const renderImage = (imageData: ImageData) => {
    return (
      <div
        className={`relative ${imageData.data.withBackground ? "bg-gray-100" : ""} ${
          imageData.data.withBorder ? "border-2 border-gray-300" : ""
        }`}
      >
        <Image
          src={imageData.data.file.url}
          alt={imageData.data.file.url}
          width={600}
          height={400}
          className={`${imageData.data.stretched ? "w-full h-auto" : ""}`}
        />
       
      </div>
    );
  };

  return (
    <>
      <motion.div
        className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Hero Section */}
        <div
          ref={heroRef}
          className="relative w-full h-screen flex justify-center items-center overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHeroInView ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={frontImg}
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              className="brightness-75"
            />
          </motion.div>
          <div className="relative z-10 text-center px-6">
          <motion.h1
  className="text-4xl md:text-5xl font-extrabold mb-4 text-white"
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: isHeroInView ? 0 : -50, opacity: isHeroInView ? 1 : 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  Welcome to{" "}
  <span
    className={`col-span-full text-center ${
      theme === "dark"
        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:from-blue-500 hover:to-purple-500"
        : "bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text hover:from-blue-600 hover:to-teal-600"
    }`}
  >
    Nexio
  </span>
  {username && (
    <span
      className="ml-3 inline-flex items-center  cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
    >
     
      <h2 className="text-white text-4xl md:text-5xl  font-semibold">
        ,{username}
      </h2>
    </span>
  )}
</motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-200 mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: isHeroInView ? 0 : 50, opacity: isHeroInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Discover the latest trends and in-depth insights into the world of technology.
            </motion.p>
            <Button variant="default" className={`text-white hover:rounded-md bg-blue-400 rounded-lg ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
                            : "bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
                        }`}>
                          <Link href={'/blog'}>
                          Explore Now
                          
                          </Link>
             
            </Button>
          </div>
        </div>

        {/* Blog Content Section */}
        <section ref={contentRef} className="mt-16 px-4 lg:px-20">
          <motion.h2
            className="text-4xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isContentInView ? 1 : 0, y: isContentInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
          >
            Latest Articles
          </motion.h2>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {Array.from({ length:3 }).map((_, idx) => (
                <SkeletonLoader key={idx} />
              ))}
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isContentInView ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              {allBlogs?.slice(0, 3)?.map((blog: Blogs) => {
                const headerBlock = blog?.blocks?.find(
                  (block: { type: string }) => block.type === "header"
                );
                const paragraphBlock = blog?.blocks?.find(
                  (block: { type: string }) => block.type === "paragraph"
                );
                const imageBlock = blog?.blocks?.find(
                  (block: { type: string }) => block.type === "image"
                );

                return (
                  <motion.div
                    key={blog._id}
                    className={`p-7 rounded-xl shadow-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} hover:scale-105 transform transition-all duration-300`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: isContentInView ? 0 : 50, opacity: isContentInView ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {imageBlock && renderImage(imageBlock)} {/* Call to render image block */}
                    {headerBlock && (
                      <h1 className={`text-${headerBlock?.data?.level * 2}xl font-bold mb-4`}>
                        {headerBlock.data.text}
                      </h1>
                    )}
                    {paragraphBlock && (
                      <p className="mb-4 text-gray-600">
                        {paragraphBlock.data.text.length > 100
                          ? `${paragraphBlock.data.text.slice(0, 100)}...`
                          : paragraphBlock.data.text}
                      </p>
                    )}

                    <div className="text-gray-500 text-sm mb-3 flex gap-2">
                      By <strong>{blog.author?.name}</strong> |{" "}
                      {new Date(blog.publishedDate).toLocaleDateString()} |{" "}
                      <span className="flex items-center gap-1 text-green-700">
                        <Timer size={16} /> {blog.readingTime} min read
                      </span>
                    </div>

                    <Link href={`blog/${blog?._id}`}>
                      <Button
                        className={`w-full py-3 rounded-full text-white font-medium shadow-md transition-all duration-200 ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
                            : "bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
                        }`}
                      >
                        Read More
                      </Button>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </section>
      </motion.div>
    </>
  );
};

export default Home;

// Interfaces for Types

export interface ImageData {
  type: string;
  data: {
    file: {
      url: string;
    };
    caption?: string;
    withBackground?: boolean;
    withBorder?: boolean;
    stretched?: boolean;
  };
}

export interface Blogs {
  _id: string;
  author: { name: string };
  publishedDate: string;
  blocks: Block[];
  readingTime: number;
}

export interface Block {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data:any; 
}
