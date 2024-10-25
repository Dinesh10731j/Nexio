import { useMutation } from "@tanstack/react-query";
import { loginType } from "@/types/Types";
import axiosInstance from "@/axiosInstance/axiosInstance";
import { Endpoints } from "@/endpoints/endpoints";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
const { Login } = Endpoints;
import { useRouter } from "next/navigation";

const userLogin = async (logindata: loginType) => {
  try {
    const response = await axiosInstance.post(Login, logindata);

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const UseLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["userLogin"],
    mutationFn: userLogin,
    onSuccess: (data) => {
      toast.success(data?.message);

      const token = data?.accessToken;

      Cookies.set("token", token);

      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast.error(error?.message);
      }
    },
  });
};
