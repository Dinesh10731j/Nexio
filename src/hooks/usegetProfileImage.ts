import axiosInstance from "@/axiosInstance/axiosInstance";
import { Endpoints } from "@/endpoints/endpoints";
const {getprofileimage} = Endpoints
import {useQuery} from "@tanstack/react-query";
const getuserProfileImage = async ()=>{
    try{
const response = await axiosInstance.get(getprofileimage);

return response.data;
    }catch(error:unknown){

        if(error instanceof Error){
            throw new Error(error?.message);
        }
    }
}


export const UseGetProfileImage = ()=>{
    return useQuery({queryKey:['getprofileimage'],queryFn:getuserProfileImage,refetchInterval:1000})
}