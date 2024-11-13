// src/components/Post.tsx
"use client";
import React from "react";
import { UseUserPosts } from "@/hooks/useUserPosts";
interface Post {
  id: string;
  title: string;
  content: string;
}

const Post = () => {
  const userPosts = UseUserPosts();

  console.log(userPosts?.data);

 

  return (
    <div className="w-full px-4 py-8 mt-16">
      <h1 className="text-2xl font-bold text-center mb-8">
        Blogger&apos;s Posts
      </h1>
       <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-4 md:p-6 lg:p-8">
       
      </div> 
    </div>
  );
};

export default Post;
