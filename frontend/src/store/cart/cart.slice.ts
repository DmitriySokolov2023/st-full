import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartItem, ICartItemCounter} from "./cart.types.ts";



const initialState:ICartItem[] = []
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state, {payload:cartItem}:PayloadAction<ICartItem>){
            const isExist = state.some(prod => prod.id === cartItem.product.id && prod.size === cartItem.product.size)

            if(isExist){
                alert('Товар уже в корзине')
            }
            else {
                state.push(cartItem)
            }
        },
        exchangeCount(state, {payload:itemCount}:PayloadAction<ICartItemCounter>){
            const isExist = state.find(item => item.id === itemCount.id)

            if (isExist){
                isExist.price = itemCount.price
            }

        }
    }
})

export const {actions , reducer} = cartSlice