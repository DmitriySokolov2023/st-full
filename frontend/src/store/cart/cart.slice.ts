import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartItem} from "../../types/product.types.ts";


const initialState:ICartItem[] = []
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state, {payload:product}:PayloadAction<ICartItem>){
            state.push(product)
        }
    }
})

export const {actions , reducer} = cartSlice