
import { Endpoints } from "@/endpoints/endpoints";
const { Blogs } = Endpoints;
import axiosInstance from "@/axiosInstance/axiosInstance";
import { useQuery } from "@tanstack/react-query";
const allBlogs  = async () => {

  
  try {
    const response = await axiosInstance.get(Blogs);
    console.log()

    return response.data.Blogs;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const UseAllBlogs = () => {
  return useQuery({
    queryKey: ["all-blogs"],
    queryFn: allBlogs,
    staleTime: 1000,
    refetchInterval: 1000,
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
  });
};
