import {IProduct} from "./product.types.ts";

export interface ICartItem{
    product:IProduct,
    count:number,
    size:number,
}