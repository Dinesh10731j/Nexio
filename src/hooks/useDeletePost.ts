import { useMutation } from "@tanstack/react-query";
import { Endpoints } from "@/endpoints/endpoints";
const { deletepost } = Endpoints;
import axiosInstance from "@/axiosInstance/axiosInstance";
import toast from "react-hot-toast";

const usedeletePost = async (postId: string) => {
  try {
    const response = await axiosInstance.delete(deletepost, {
      data: { postId },
    });

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
      return;
    }
  }
};

export const UseDeletePost = () => {
  return useMutation({
    mutationKey: ["deletepost"],
    mutationFn: usedeletePost,
    onSuccess: () => {
      toast.success("Post deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete post");
    },
  });
};
