import axiosInstance from "@/axiosInstance/axiosInstance";
import { Endpoints } from "@/endpoints/endpoints";
import { useQuery } from "@tanstack/react-query";
const {countViews} = Endpoints
const useviewcount= async ({ params }: {params:{blogId:string} })=>{
    try{
        const response = await axiosInstance.get(`${countViews}/${params.blogId}`);
        return response.data.blogs;

    }catch(error:unknown){
        if(error instanceof Error){
            throw new Error(error.message);
        }
    }
}


export const UseCountViews = (blogId: string )=>{
    return useQuery({
        queryKey:['views',blogId],
        queryFn:()=>useviewcount({ params: {blogId} })
    })
}