"use client";

import { useParams } from "next/navigation";
import { UseBlogById } from "@/hooks/useSingleBlog";
import { UseCountViews } from "@/hooks/useCountViews";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Timer, UserCircle,EyeIcon} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { Skeleton } from "@/components/ui/skeleton";
import { Key } from "react";


interface ImageBlockData {
  file?: {
    url: string;
  };
  caption?: string;
}

interface TextBlockData {
  text: string;
}

interface ListBlockData {
  items: string[];
}

interface ThemeState {
  theme: string;
}

interface RootState {
  theme: ThemeState;
}

const SingleBlog = () => {
  const params = useParams() as { blogId: string };
  const blogId = params.blogId;
  const { data: blogResponse, isLoading } = UseBlogById(blogId);
  const {data:Views} = UseCountViews(blogId);
  console.log("This is response",Views);
  const theme = useSelector((state: RootState) => state.theme.theme);

  // Extract blog data from response
  const blog = blogResponse;

  if (isLoading) {
    return (
      <div className="mx-auto p-4">
        <Skeleton className="w-full h-64 mb-4 bg-gray-400" />
        <Skeleton className="w-2/3 h-8 mb-2 bg-gray-400" />
        <Skeleton className="w-1/4 h-4 mb-2 bg-gray-400" />
        <Skeleton className="w-5/6 h-6 mb-2 bg-gray-400" />
        <Skeleton className="w-full h-32 mb-4 bg-gray-400" />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div
        className={`mx-auto px-4 py-20 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        }`}
      >
        {/* Blog Header Section */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Image Section */}
          <div className="lg:w-2/3">
            <Image
              src={
                blog?.blocks?.find(
                  (block: { type: string }) => block.type === "image"
                )?.data?.file?.url || "/default-thumbnail.jpg"
              }
              alt="Blog Image"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Blog Info Section */}
          <div className="lg:w-1/3">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              {blog?.blocks[0]?.data?.text || "Blog Title"}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500 text-sm mb-4">
              <span className="flex items-center gap-2">
                
                  <UserCircle className="w-5 h-5" />
                

                <strong>{blog?.author?.name || "Unknown Author"}</strong>
              </span>
              <span className="hidden sm:block">|</span>
              <span>{new Date(blog?.publishedDate).toLocaleDateString()}</span>
              <span className="hidden sm:block">|</span>
              <span className="flex items-center gap-2 text-green-700">
                <Timer className="w-5 h-5" />
                {blog?.readingTime || 5} min read
              </span>
              <span className="hidden sm:block">|</span>
              <span className="flex items-center gap-2 ">
                <EyeIcon className="w-5 h-5" />
                {Views?.views ?? 0}
              </span>

            </div>
            <Button variant="default" className="mt-4">
              Share Article
            </Button>
          </div>
        </div>

        {/* Blog Content Section */}
        <div className="mt-10 lg:mt-12">
          <h2 className="text-2xl font-semibold mb-6">Overview</h2>
          {blog?.blocks?.map(
            (block: {
              type: unknown;
              id: Key | null | undefined;
              data: ImageBlockData | TextBlockData | ListBlockData;
            }) => {
              switch (block.type) {
                case "header":
                  return (
                    <h3 key={block.id} className="text-2xl font-semibold mb-4">
                      {(block.data as TextBlockData).text}
                    </h3>
                  );
                case "paragraph":
                  return (
                    <p key={block.id} className="text-lg leading-relaxed mb-6">
                      {(block.data as TextBlockData).text}
                    </p>
                  );

                case "list":
                  const listData = block.data as ListBlockData;
                  return (
                    <ul key={block.id} className="list-disc pl-6 mb-6">
                      {listData.items.map((item, idx) => (
                        <li key={idx} className="text-lg leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            }
          )}
        </div>

        {/* Footer */}
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
