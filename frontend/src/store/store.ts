import {configureStore} from "@reduxjs/toolkit";
import { reducer as cartReduces} from "./cart/cart.slice.ts";

const rootReducer = {
    cart: cartReduces
}

export const store = configureStore({
    reducer:rootReducer
})

export type RootState = ReturnType<typeof store.getState>