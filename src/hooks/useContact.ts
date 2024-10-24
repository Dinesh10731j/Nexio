import { useMutation } from "@tanstack/react-query";
import { Endpoints } from "@/endpoints/endpoints";
const { Contact } = Endpoints;
import axiosInstance from "@/axiosInstance/axiosInstance";
import { contactType } from "@/types/Types";
import toast from "react-hot-toast";

const userContact = async (Contactdata: contactType) => {
  try {
    const response = await axiosInstance.post(Contact, Contactdata);

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    };
  };
};

export const UseContact = () => {
  return useMutation({
    mutationKey: ["userContact"],
    mutationFn: userContact,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast.error(error.message);
      };
    },
  });
};
