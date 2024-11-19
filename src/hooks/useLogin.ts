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
      const username = data?.username;

      Cookies.set("token", token, { expires: 1 / 24 });
      Cookies.set("username", username, { expires: 1 / 24 });

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast.error(error?.message);
      }
    },
  });
};
