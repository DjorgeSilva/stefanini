import { Dispatch } from "react";
import { actionTypes } from "../constants";
import { interfaceActionUser, userInterface } from "../interface";


export const actionCadastrar = (user: userInterface) => {
    return ((dispatch: Dispatch<any>) => {
        dispatch({
            type: 'adicionar',
            payload: user
        })
    })
}


export const showAction = () => {
    return ((dispatch: Dispatch<any>) => {
        dispatch({
            type: 'show',
        })
    })
}