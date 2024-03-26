import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartItem, ICartItemCounter} from "./cart.types.ts";



const initialState:ICartItem[] = []
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state, {payload:cartItem}:PayloadAction<ICartItem>){
            const isExist = state.some(prod => prod.id === cartItem.id && prod.size === cartItem.size)

            if(isExist){
                alert('Товар уже в корзине')
            }
            else {
                state.push(cartItem)
            }
        },
        exchangeCount(state, action:PayloadAction<ICartItemCounter>){
            const {id, price} = action.payload
            const isExist = state.find(item => item.id === id)
            if (isExist) state.map(cartItem => cartItem.id === id ? cartItem.price = price : cartItem.price)

        }
    }
})

export const {actions , reducer} = cartSlice