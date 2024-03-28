import {IProduct} from "../../types/product.types.ts";

export interface ICartItem{
    id:number,
    product:IProduct,
    count:number,
    size:number,
    price:number
}


export interface ICartItemCounter{
    id:number,
    type:'plus' | 'minus',
    size:number
}



