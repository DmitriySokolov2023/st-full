import {ICartInitialState} from "../store/cart/cart.types.ts";


export const setLocalStorage = (cart:ICartInitialState) =>{
    localStorage.setItem('cartItems', JSON.stringify(cart))
}

export const getLocalStorage = () =>{
    const cartItems = localStorage.getItem('cartItems')
    if (cartItems) return JSON.parse(cartItems)

}