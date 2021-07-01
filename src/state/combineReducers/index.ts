import {combineReducers} from "@reduxjs/toolkit"
import { reducer } from "../reducers/user.reducer"

export const reducers = combineReducers({
    user: reducer
})  



export type TypeReducer = ReturnType<typeof reducers>