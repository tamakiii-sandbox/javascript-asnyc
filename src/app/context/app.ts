import React, { useContext } from "react"
import * as reducer from "../reducer"

export const AppStateContext = React.createContext<reducer.RootState>(null as any);
export const AppDispatchContext = React.createContext<React.Dispatch<reducer.Action>>(null as any)

export function useAppState() {
    return useContext(AppStateContext)
}
export function useAppDispatch() {
    return useContext(AppDispatchContext)
}