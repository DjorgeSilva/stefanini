import { actionTypes } from "../constants";
import { interfaceActionUser, userInterface } from "../interface";

const initialState: userInterface[] = [];

export const reducer = (state = initialState, action: interfaceActionUser) => {
    switch (action.type) {

        case actionTypes.CADASTRAR:
            return [...state, action.payload]

        default:
            return state
    }
}