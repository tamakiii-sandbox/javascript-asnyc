import React, { useContext } from "react"
import * as reducer from "../reducer"

export const RootStateContext = React.createContext<reducer.RootState>(null as any);
export const DispatchContext = React.createContext<React.Dispatch<reducer.Action>>(null as any)

export function useRootState() {
    return useContext(RootStateContext)
}
export function useDispatch() {
    return useContext(DispatchContext)
}