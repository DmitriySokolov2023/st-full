import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ModalTypes} from "./modal.types.ts";

const initialState:ModalTypes = {
    visible:false
}
export const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        toggleModal(state, {payload}:PayloadAction<ModalTypes>){
            state.visible = !payload.visible
        }
    }
})

export const {actions, reducer} = modalSlice