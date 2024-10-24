import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/axiosInstance/axiosInstance";
import { Endpoints } from "@/endpoints/endpoints";
const { Signup } = Endpoints;
import { loginType } from "@/types/Types";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const userSignup = async (Signupdata: loginType) => {
  try {
    const response = await axiosInstance.post(Signup, Signupdata);

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error?.message);
    }
  }
};

export const UseSignup = () => {
  return useMutation({
    mutationKey: ["userSignup"],
    mutationFn: userSignup,
    onSuccess: (data) => {
      toast.success(data?.message);
      const token = data?.accessToken;
      Cookies.set("token", token);
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast.error(error?.message);
      }
    },
  });
};
