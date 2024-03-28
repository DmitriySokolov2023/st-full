import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartInitialState, ICartItem, ICartItemCounter, ICartItemRemove} from "./cart.types.ts";



const initialState:ICartInitialState = {
    items:[]
}
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        toggleToCart(state, {payload:cartItem}:PayloadAction<ICartItem>){
            const isExist = state.items.some(prod => prod.id === cartItem.id && prod.size === cartItem.size)
            if(isExist){
               state.items = state.items.filter(item => item.id !== cartItem.id || item.size !==cartItem.size)
            }
            else {
                state.items.push(cartItem)
            }
        },
        removeToCart(state, action:PayloadAction<ICartItemRemove>){
            state.items = state.items.filter(item => item.id !== action.payload.id || item.size !== action.payload.size)

        },
        exchangeCount(state, action:PayloadAction<ICartItemCounter>){
            const {id, type, size} = action.payload
            const item = state.items.find(item => item.id === id && item.size === size && item)
            console.log(item)
            if(item){
                if(type === 'plus'){
                    item.count++
                    item.price = item.product.price * item.count
                }
                else {
                    if (item.count > 1){
                        item.count--
                        item.price = item.product.price * item.count
                    }
                    else item.count = 1
                }
            }
        }
    }
})

export const {actions , reducer} = cartSlice