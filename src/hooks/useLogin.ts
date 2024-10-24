import { useMutation } from "@tanstack/react-query";
import { loginType } from "@/types/Types";
import axiosInstance from "@/axiosInstance/axiosInstance";
import { Endpoints } from "@/endpoints/endpoints";
const { Login } = Endpoints;

const userLogin = async (loginData: loginType) => {
  try {
    const response = await axiosInstance.post(Login, loginData);

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    };
  };
};


export const UseLogin = ()=>{
    return useMutation({mutationKey:['userLogin'],mutationFn:userLogin});
}
