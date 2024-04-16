import {useDispatch} from "react-redux";
import {useMemo} from "react";
import { bindActionCreators} from "@reduxjs/toolkit";
import {actions as cartActions} from "../store/cart/cart.slice.ts";
import {actions as modalActions} from "../store/modal/modal.slice.ts";


const rootActions = {
    ...cartActions,
    ...modalActions

}



export const useActions = () =>{
    const dispatch = useDispatch()

    return useMemo(()=> bindActionCreators(rootActions, dispatch), [dispatch])
}