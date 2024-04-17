import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {OrderTypes} from "./order.types.ts";

const initialState:OrderTypes = {
    status:false
}
export const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
        toggleOrder(state, {payload}:PayloadAction<OrderTypes>){
            state.status = payload.status
        }
    }
})

export const {actions, reducer} = orderSlice