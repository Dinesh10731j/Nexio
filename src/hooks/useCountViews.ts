import axiosInstance from "@/axiosInstance/axiosInstance";
import { Endpoints } from "@/endpoints/endpoints";
import { useQuery } from "@tanstack/react-query";
const {singleblog} = Endpoints
const useviewcount= async ({ params }: {params:{blogId:string} })=>{
    try{
        const response = await axiosInstance.get(`${singleblog}/${params.blogId}`);
        return response.data.blog;

    }catch(error:unknown){
        if(error instanceof Error){
            throw new Error(error.message);
        }
    }
}


export const UseCountView = (blogId: string )=>{
    return useQuery({
        queryKey:['views'],
        queryFn:()=>useviewcount({ params: {blogId} })
    })
}