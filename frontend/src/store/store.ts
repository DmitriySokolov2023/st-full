import {configureStore} from "@reduxjs/toolkit";
import { reducer as cartReduces} from "./cart/cart.slice.ts";
import {reducer as modalReducers} from  "./modal/modal.slice.ts"

const rootReducer = {
    cart: cartReduces,
    modal:modalReducers
}

export const store = configureStore({
    reducer:rootReducer
})

export type RootState = ReturnType<typeof store.getState>