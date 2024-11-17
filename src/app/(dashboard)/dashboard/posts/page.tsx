"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UseUserPosts } from "@/hooks/useUserPosts";
import { Button } from "@/components/ui/button";
import { Timer } from "lucide-react";

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

const renderImage = (imageData: ImageData) => {
  return (
    <div
      className={`relative ${
        imageData.data.withBackground ? "bg-gray-100" : ""
      } ${imageData.data.withBorder ? "border-2 border-gray-300" : ""}`}
    >
      <Image
        src={imageData.data.file.url}
        alt="Post Image"
        width={600}
        height={400}
        className={`${imageData.data.stretched ? "w-full h-auto" : ""}`}
      />
    </div>
  );
};

const Posts = () => {
  const { data: userPosts, isLoading } = UseUserPosts();

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!userPosts || userPosts?.Posts?.length === 0) {
    return <div className="text-center">No posts found.</div>;
  }

  return (
    <div className="w-full px-4 py-8 mt-16 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-12">
        User&apos;s Posts
      </h1>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {userPosts?.Posts?.map((post: Post) => {
          // Extracting header, paragraph, and image blocks
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
              className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 bg-white dark:bg-gray-800"
            >
              {/* Render image if exists */}
              {imageBlock && renderImage(imageBlock)}

              <div className="p-5">
                <h2 className="text-xl font-semibold mb-3 truncate">
                  {headerBlock?.data?.text || "Untitled Post"}
                </h2>

                {/* Render snippet of the first paragraph */}
                {paragraphBlock && (
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    {paragraphBlock.data.text.length > 100
                      ? `${paragraphBlock.data.text.slice(0, 100)}...`
                      : paragraphBlock.data.text}
                  </p>
                )}

                {/* Author, Date, and Read Time */}
                <div className="text-gray-500 text-sm mb-3 flex gap-2">
                  By <strong>{post.author.name}</strong> |{" "}
                  {new Date(post.publishedDate).toLocaleDateString()} |{" "}
                  <span className="flex items-center gap-1 text-green-700">
                    <Timer size={16} />
                    {post.readingTime || "5"} min read
                  </span>
                </div>

                <Link href={`/posts/${post._id}`}>
                  <Button className="w-full py-3 rounded-full text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
