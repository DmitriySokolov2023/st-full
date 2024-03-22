import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartItem} from "../../types/cart.types.ts";


const initialState:ICartItem[] = []
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state, {payload:cartItem}:PayloadAction<ICartItem>){
            // const isId = state.some(prod => prod.product.id === cartItem.product.id)
            // const isSize = state.some(prod => prod.product.id === cartItem.product.id)
            //
            // if(isId && isSize){
            //     state = state.map(p => p.product.id === cartItem.product.id ? p.count +1 : p)
            //
            // }
            // else {
            //     state.push(cartItem)
            // }
            state.push(cartItem)
        }
    }
})

export const {actions , reducer} = cartSlice