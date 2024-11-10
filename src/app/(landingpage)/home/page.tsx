"use client";
import React from "react";
import Image from "next/image";
import frontImg from "../../../assets/Image.png";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { UseAllBlogs } from "@/hooks/useBlogs";
import { Blogs } from "@/types/Types";
import Link from "next/link";
import { Timer } from "lucide-react";

interface themeState {
  theme: string;
}

interface RootState {
  theme: themeState;
}

const Home = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { data: allBlogs, isLoading } = UseAllBlogs();

  return (
    <>
      <div
        className={`mx-auto px-4 py-10 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        {/* Hero Section */}
        <div className="relative flex justify-center items-center mb-10">
          <Image
            src={frontImg}
            alt="Blog Hero Image"
            height={500}
            width={1200}
            className="rounded-lg shadow-lg px-7"
          />
          {/* Overlay Section */}
          <div
            className={`absolute text-center p-7 shadow-md ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-50"
            }`}
          >
            <h1 className="text-2xl md:text-4xl font-bold">
              Welcome to <span className="text-blue-500">Nexio</span>
            </h1>
            <p className="text-md mt-4 md:text-2xl">
              Discover the latest trends, tips, and deep dives into the world of
              technology.
            </p>
          </div>
        </div>

        {/* Blog Content Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Latest Articles
          </h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {allBlogs?.map((blog: Blogs) => (
                <div
                  key={blog._id}
                  className={`p-6 rounded-lg shadow-lg ${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  {/* Blog Image */}
                  <Image
                    src={blog.image?.url || frontImg}
                    alt={blog.image?.caption || "Article Thumbnail"}
                    height={200}
                    width={400}
                    className="rounded-lg"
                  />

                  {/* Blog Title */}
                  <h3 className="text-xl font-semibold mt-4">{blog.title}</h3>

                  {/* Blog Meta Data */}
                  <div className="text-sm text-gray-500 mt-2 flex flex-wrap gap-4 items-center">
                    {/* Author Name */}
                    <span>
                      By <strong>{blog.author?.name}</strong>
                    </span>

                    {/* Divider */}
                    <span className="mx-2">|</span>

                    {/* Published Date */}
                    <span>
                      {new Date(blog.publishedDate).toLocaleDateString()}
                    </span>

                    {/* Divider */}
                    <span className="mx-2">|</span>

                    {/* Reading Time with Icon */}
                    <span className="flex items-center gap-1 text-green-700">
                      <Timer size={16} /> {/* Icon */}
                      {blog.readingTime} min read
                    </span>
                  </div>

                  {/* Blog Excerpt */}
                  <p className="mt-2">{blog.content.slice(0, 100)}...</p>

                  {/* Read More Button */}
                  <Button
                    variant={"ghost"}
                    className="bg-blue-500 text-white mt-2 rounded-md"
                  >
                    <Link href={`/blog/${blog._id}`} className="block">
                      Read More
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
