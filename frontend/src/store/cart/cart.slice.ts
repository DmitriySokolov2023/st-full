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
            const {id, type, size} = action.payload
            const item = state.find(item => item.id === id && item.size === size && item)
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