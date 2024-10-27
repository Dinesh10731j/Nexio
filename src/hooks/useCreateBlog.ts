import axiosInstance from "@/axiosInstance/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { Endpoints } from "@/endpoints/endpoints";
import toast from "react-hot-toast";
const { Createblog } = Endpoints;
const createBlog = async (blog: unknown) => {
  try {
    const response = await axiosInstance.post(Createblog, {blog},{
        headers:{
            "Content-Type":'application/json'
        }
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    };
  };
};


export const UseCreateBlog = ()=>{
    return useMutation({
        mutationKey:['create-post'],mutationFn:createBlog,onSuccess:()=>{
            toast.success('Blog created successfully')
        },onError:()=>{
            toast.error("Sorry failed to create blog");
        },
    });
};
