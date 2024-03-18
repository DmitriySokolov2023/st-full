import {useQuery} from "@tanstack/react-query";
import productService from "../services/product.service.ts";

export const useProducts = (categoryId:number) => {
    return useQuery({queryKey:['products'], queryFn: ()=> productService.getProductByCategory(categoryId), select:({data}) => data})
}