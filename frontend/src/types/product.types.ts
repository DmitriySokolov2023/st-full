export interface IProduct {
    id:number,
    title:string,
    image:string,
    size:number,
    count:number,
    price:number
}

export interface ICartItem{
    title:string,
    image:string,
    size:{},
    count:number,
    price:number
}