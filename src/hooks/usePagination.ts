import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/axiosInstance/axiosInstance";
import { Endpoints } from "@/endpoints/endpoints";
const {paginatePage} = Endpoints

const usepagination = async ({page}:{page:string})=>{
    try{

        const response = await axiosInstance.get(`${paginatePage}?page=${page}&limit=6`);

        return response.data.data;


    }catch(error:unknown){
        if(error instanceof Error){
            throw new Error(error?.message);
        }else{
            throw new Error("An unknown error occured");
        }
    }
}


export const UsePagination = ({page}:{page:string})=>{
    return useQuery({queryKey:['Pagination',page],queryFn:()=>usepagination({page})})
}