import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartItem} from "../../types/cart.types.ts";



const initialState:ICartItem[] = []
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state, {payload:cartItem}:PayloadAction<ICartItem>){
            const isId = state.some(prod => prod.product.id === cartItem.product.id)
            const isSize = state.some(prod => prod.size === cartItem.size)

            if(isId && isSize){
                alert('Товар уже в корзине!')
            }
            else {
                state.push(cartItem)
            }
        },

    }
})

export const {actions , reducer} = cartSlice