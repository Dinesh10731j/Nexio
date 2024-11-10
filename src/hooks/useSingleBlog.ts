import axiosInstance from "@/axiosInstance/axiosInstance";
import { Endpoints } from "@/endpoints/endpoints";
import { useQuery } from "@tanstack/react-query";
const {singleblog} = Endpoints
const singleBlog = async ({ params }: {params:{blogId:string} })=>{
    try{
        const response = await axiosInstance.get(`${singleblog}/${params.blogId}`);
        return response.data.blog;

    }catch(error:unknown){
        if(error instanceof Error){
            throw new Error(error.message);
        }
    }
}


export const UseBlogById = (blogId: string )=>{
    return useQuery({
        queryKey:['singleBlog'],
        queryFn:()=>singleBlog({ params: {blogId} })
    })
}