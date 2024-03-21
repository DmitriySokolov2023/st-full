import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        getText(){
            console.log(123)
        }
    }
})

export const {actions , reducer} = cartSlice