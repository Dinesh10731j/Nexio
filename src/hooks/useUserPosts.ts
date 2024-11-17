import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/axiosInstance/axiosInstance";
import { Endpoints } from "@/endpoints/endpoints";
const {userblogs} = Endpoints
const UserPosts = async ()=>{
    try{

        const response = await axiosInstance.get(userblogs);
        
        return response.data;
    }catch(error:unknown){

        if(error instanceof Error){
            throw new Error(error?.message)
        }
    }
}




export const UseUserPosts =()=>{
    return useQuery({queryKey:['userposts'],queryFn:UserPosts});
}