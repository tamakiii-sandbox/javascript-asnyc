import React, { useContext } from "react"
import { State, Action } from "../reducer"

export const RootStateContext = React.createContext<State>(null as any);
export const RootDispatchContext = React.createContext<React.Dispatch<Action>>(null as any);

export function useRootState() {
    return useContext(RootStateContext)
}

export function useRootDispatch() {
    return useContext(RootDispatchContext)
}