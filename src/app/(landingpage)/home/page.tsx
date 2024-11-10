"use client";
import React, { useRef } from "react";
import Image from "next/image";
import frontImg from "../../../assets/Image.png";
import Footer from "@/components/footer";
import { useSelector } from "react-redux";
import { UseAllBlogs } from "@/hooks/useBlogs";
import { Blogs } from "@/types/Types";
import Link from "next/link";
import { Timer } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton"; 
import { Button } from "@/components/ui/button"; 

interface themeState {
  theme: string;
}

interface RootState {
  theme: themeState;
}

const Home = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { data: allBlogs, isLoading } = UseAllBlogs();

  // Refs for animations
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  // Visibility check
  const isHeroInView = useInView(heroRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true });

  // Skeleton Loader Component
  const SkeletonLoader = () => (
    <div className="p-4 rounded-xl shadow-xl">
      <Skeleton className="h-40 w-full rounded-lg mb-4" />
      <Skeleton className="h-6 w-3/4 rounded-md mb-2" />
      <Skeleton className="h-4 w-1/2 rounded-md mb-2" />
      <Skeleton className="h-4 w-1/3 rounded-md mb-4" />
      <Skeleton className="h-8 w-full rounded-md" />
    </div>
  );

  return (
    <>
      <motion.div
        className={`min-h-screen ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
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
              Welcome to <span className="text-blue-500">Nexio</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200 mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: isHeroInView ? 0 : 50, opacity: isHeroInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Discover the latest trends and in-depth insights into the world of technology.
            </motion.p>
            <Button variant="default">Explore Now</Button>
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
              {Array.from({ length: 6 }).map((_, idx) => (
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
              {allBlogs.slice(0,3).map((blog: Blogs) => (
                <motion.div
                  key={blog._id}
                  className={`p-4 rounded-xl shadow-xl ${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  } hover:scale-105 transform transition-all duration-300`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: isContentInView ? 0 : 50, opacity: isContentInView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Image
                    src={blog.image?.url || frontImg}
                    alt={blog.image?.caption || "Article Image"}
                    height={200}
                    width={400}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                  <div className="text-gray-500 text-sm mb-3 flex gap-2">
                    By <strong>{blog.author?.name}</strong> |{" "}
                    {new Date(blog.publishedDate).toLocaleDateString()} |{" "}
                    <span className="flex items-center gap-1 text-green-700">
                      <Timer size={16} /> {blog.readingTime} min read
                    </span>
                  </div>
                  <p className="mb-4 text-gray-600">
                    {blog.content.slice(0, 100)}...
                  </p>
                  <Button asChild variant="ghost" className="bg-blue-400 text-white rounded-md w-full bottom-3" >
                    <Link href={`/blog/${blog._id}`}>Read More</Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>
      </motion.div>
      <section className="py-4">
        <Footer />
      </section>
    </>
  );
};

export default Home;
