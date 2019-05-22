import React, { useContext } from "react"
import { State, Action } from "../reducer/counter"

export const StateContext = React.createContext<State>(null as any);
export const DispatchContext = React.createContext<React.Dispatch<Action>>(null as any);

export function useState() {
    return useContext(StateContext)
}

export function useDispatch() {
    return useContext(DispatchContext)
}