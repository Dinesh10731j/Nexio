"use client"
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { blogs } from '@/lib/blogs';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Blog = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen py-10 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Latest Blogs</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" width={200} height={200}/>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <Button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-150">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
