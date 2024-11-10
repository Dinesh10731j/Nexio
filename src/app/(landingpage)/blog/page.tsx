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
        className={`min-h-screen py-10 px-4 ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
      >
        <h1
          className={`text-2xl md:text-4xl font-bold text-center mb-10 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          Our Latest Blogs
        </h1>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {userBlogs?.data?.length === 0 ? (
            <p className="text-center col-span-full text-lg font-medium">
              Blogs not found.
            </p>
          ) : (
            userBlogs?.data?.map((blog: Blogs) => (
              <div
                key={blog._id}
                className={`shadow-lg rounded-lg overflow-hidden ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <Image
                  src={blog?.image?.url}
                  alt={blog?.title}
                  className="w-full h-48 object-cover"
                  width={200}
                  height={200}
                />
                <div
                  className={`p-6 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  <h2
                    className={`text-2xl font-semibold mb-4 ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {`${blog.title}`}
                  </h2>
                  <p
                    className={`mb-4 flex text-green-700 gap-2 text-center ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <Timer /> {`${blog?.readingTime} minutes read `}
                  </p>
                  <p
                    className={`mb-4 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {blog?.image?.caption || "No caption available"}
                  </p>
                  <p
                    className={`mb-4 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <span>
                      By <strong>{blog?.author?.name}</strong>
                    </span>
                  </p>
                  <p
                    className={`mb-4 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Publishdate:
                    <strong>
                      {new Date(blog?.publishedDate).toLocaleDateString()}
                    </strong>
                  </p>

                  <Link href={`blog/${blog?._id}`}>
                    <Button
                      className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-150 ${
                        theme === "dark" ? "hover:bg-blue-500" : ""
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
