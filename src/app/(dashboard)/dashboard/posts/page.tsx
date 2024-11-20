"use client";

import React from "react";
import Image from "next/image";
import { UseUserPosts } from "@/hooks/useUserPosts";
import { Button } from "@/components/ui/button";
import { Timer, Trash2 } from "lucide-react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

interface ImageData {
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

interface Post {
  _id: string;
  author: {
    _id: string;
    name: string;
  };
  blocks: Block[];
  publishedDate: string;
  readingTime?: number;
}

interface Block {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

interface ThemeState {
  theme: string;
}

interface RootState {
  theme: ThemeState;
}

// Render image block
const renderImage = (imageData: ImageData) => (
  <div
    className={`relative rounded-lg overflow-hidden ${
      imageData.data.withBackground ? "bg-gray-100" : ""
    } ${imageData.data.withBorder ? "border-2 border-gray-300" : ""}`}
  >
    <Image
      src={imageData.data.file.url}
      alt="Post Image"
      width={600}
      height={400}
      className={`w-full h-60 object-cover ${
        imageData.data.stretched ? "w-full h-auto" : ""
      }`}
    />
  </div>
);

const Posts = () => {
  const { data: userPosts, isLoading } = UseUserPosts();
  const username = Cookies.get("username");
  const theme = useSelector((state: RootState) => state.theme.theme);

  // Handle post deletion
  const handleDeletePost = (postId: string) => {
    console.log("Delete post with ID:", postId);
  };

  return isLoading ? (
    <div className={`flex justify-center items-center  h-screen animate-pulse`}>
      <div
        className={`text-3xl font-bold animate-bounce ${
          theme === "dark"
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:from-blue-500 hover:to-purple-500"
            : "bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text hover:from-blue-600 hover:to-teal-600"
        }`}
      >
        Loading...
      </div>
    </div>
  ) : userPosts?.Posts?.length === 0 ? (
    <div className="text-center text-lg font-semibold">No posts found.</div>
  ) : (
    <div className="p-16 ml-16 md:ml-0 lg:ml-0 max-w-7xl mx-auto">
      {username && (
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
          {username}&apos;s Posts
        </h1>
      )}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {userPosts?.Posts?.map((post: Post) => {
          const headerBlock = post.blocks.find(
            (block) => block.type === "header"
          );
          const paragraphBlock = post.blocks.find(
            (block) => block.type === "paragraph"
          );
          const imageBlock = post.blocks.find(
            (block) => block.type === "image"
          );

          return (
            <div
              key={post._id}
              className="group rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative bg-white dark:bg-gray-800"
            >
              {/* Render image if it exists */}
              {imageBlock && renderImage(imageBlock)}

              <div className="px-7">
                <div className="flex  mb-4">
                  <h2 className="text-xl font-semibold truncate flex-1 group-hover:text-blue-600 dark:group-hover:text-blue-300">
                    {headerBlock?.data?.text || "Untitled Post"}
                  </h2>
                  <Button
                    onClick={() => handleDeletePost(post._id)}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Delete post"
                  >
                    <Trash2 size={20} />
                  </Button>
                </div>

                {/* Render snippet of the first paragraph */}
                {paragraphBlock && (
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    {paragraphBlock.data.text.length > 100
                      ? `${paragraphBlock.data.text.slice(0, 100)}...`
                      : paragraphBlock.data.text}
                  </p>
                )}

                {/* Author, Date, and Read Time */}
                <div className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                  By <strong className="mx-1">{post.author.name}</strong>|
                  {new Date(post.publishedDate).toLocaleDateString()}|
                  <span className="flex items-center gap-1 text-green-700 dark:text-green-400">
                    <Timer size={16} />
                    {post.readingTime || "5"} min read
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
