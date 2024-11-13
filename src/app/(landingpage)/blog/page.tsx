"use client";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { UseAllBlogs } from "@/hooks/useBlogs";
import { Blogs } from "@/types/Types";
import { Timer } from "lucide-react";
import Link from "next/link";

interface themeState {
  theme: string;
}

interface RootState {
  theme: themeState;
}

const Blog = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const userBlogs = UseAllBlogs();

  return (
    <>
      <Header />
      <div
        className={`min-h-screen py-20 px-4 ${
          theme === "dark" ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <h1
          className={`text-xl md:text-3xl font-bold text-center mb-12 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          Our Latest Blogs
        </h1>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {userBlogs?.data?.length === 0 ? (
            <p className="text-center col-span-full text-lg font-medium">
              Blogs not found.
            </p>
          ) : (
            userBlogs?.data?.map((blog: Blogs) => (
              <div
                key={blog._id}
                className={`rounded-lg overflow-hidden transform transition-transform hover:scale-105 ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } shadow-lg hover:shadow-xl`}
              >
                <div className="relative">
                  <Image
                    src={blog?.image?.url}
                    alt={blog?.title}
                    className="w-full h-56 object-cover"
                    width={200}
                    height={200}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                </div>

                <div
                  className={`p-5 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  <h2
                    className={`text-xl font-semibold mb-3 truncate ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {blog.title}
                  </h2>
                  
                  <div className="flex flex-wrap items-center justify-between text-sm mb-4">
  {/* Reading time */}
  <p
    className={`flex items-center gap-1 text-green-700 ${
      theme === "dark" ? "text-gray-400" : "text-gray-600"
    }`}
  >
    <Timer size={16} /> {`${blog?.readingTime} min read`}
  </p>

  {/* Author name */}
  <div
    className={`${
      theme === "dark" ? "text-gray-400" : "text-gray-600"
    }`}
  >
    By <strong>{blog?.author?.name}</strong>
  </div>

  {/* Published date */}
  <p
    className={`${
      theme === "dark" ? "text-gray-400" : "text-gray-600"
    }`}
  >
    <strong>{new Date(blog?.publishedDate).toLocaleDateString()}</strong>
  </p>
</div>

                  <p
                    className={`text-sm mb-5 line-clamp-2 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {blog?.image?.caption || "No caption available"}
                  </p>

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
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
