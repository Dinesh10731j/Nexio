import { useMutation } from "@tanstack/react-query";
import { Endpoints } from "@/endpoints/endpoints";
import axiosInstance from "@/axiosInstance/axiosInstance";
import toast from "react-hot-toast";
const { uploadprofileimage } = Endpoints;

const uploadImage = async (profileUrl: string) => {
  try {
    const response = await axiosInstance.post(uploadprofileimage, {
      profileUrl,
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error?.message);
    }
  }
};

export const UseUploadProfileImage = () => {
  return useMutation({
    mutationKey: ["uploadimage"],
    mutationFn: uploadImage,
    onSuccess: () => {
      toast.success("Profile updated successfully");
    },
    onError: () => {
      toast.error("Failed to upload profile");
    },
  });
};
