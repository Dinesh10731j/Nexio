"use client";
import {useState} from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { Timer } from "lucide-react";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import { UsePagination } from "@/hooks/usePagination";

interface themeState {
  theme: string;
}

interface RootState {
  theme: themeState;
}

const Blog = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
 
  const [currentPage, setCurrentPage] = useState(1);

  const { data: paginatedBlogs,isLoading} = UsePagination({ page: currentPage.toString() });

  console.log('This is totalPages',paginatedBlogs?.totalPages)


  const renderImage = (imageData: ImageData) => {
    return (
      <div
        className={`relative ${imageData.data.withBackground ? "bg-gray-100" : ""} ${imageData.data.withBorder ? "border-2 border-gray-300" : ""}`}
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
      <Header />
      <div className={`min-h-screen py-20 px-4 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
        <h1 className={`text-xl md:text-3xl font-bold text-center mb-12 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
          Our Latest Blogs
        </h1>

        {/* Blog Grid */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {isLoading ? (
            <div
            className={`col-span-full text-center animate-bounce ${theme === "dark" 
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:from-blue-500 hover:to-purple-500" 
              : "bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text hover:from-blue-600 hover:to-teal-600"}`}
          >
            Loading...
          </div>
          
          ) : paginatedBlogs?.length === 0 ? (
            <p className="text-center col-span-full text-lg font-medium">No blogs found.</p>
          ) : (
            paginatedBlogs?.data?.map((blog: Blogs) => {
              const headerBlock = blog?.blocks?.find((block: { type: string }) => block.type === "header");
              const paragraphBlock = blog?.blocks?.find((block: { type: string }) => block.type === "paragraph");
              const imageBlock = blog?.blocks?.find((block: { type: string }) => block.type === "image");

              return (
                <div
                  key={blog._id}
                  className={`rounded-lg overflow-hidden transform transition-transform hover:scale-105 ${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-lg hover:shadow-xl`}
                >
                  {imageBlock && renderImage(imageBlock)} 

                  {/* Blog Content */}
                  <div className={`p-5 ${theme === "dark" ? "text-gray-300" : "text-gray-800"}`}>
                    <h2 className={`text-xl font-semibold mb-3 truncate ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                      {headerBlock?.data?.text || "Untitled Blog"}
                    </h2>

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

                    <Link href={`blog/${blog._id}`}>
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
              
              );
            })
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={paginatedBlogs?.totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      <Footer />
    </>
  );
};

export default Blog;
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
