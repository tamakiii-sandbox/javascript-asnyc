import React, { useContext } from "react"
import { State, Action } from "../reducer"
import * as app from "../reducer/app"
import * as counter from "../reducer/counter"

export const RootStateContext = React.createContext<State>(null as any)
export const AppStateContext = React.createContext<app.AppState>(null as any)
export const CounterStateContext = React.createContext<counter.State>(null as any)

export const RootDispatchContext = React.createContext<React.Dispatch<Action>>(null as any)

export function useRootState() {
    return useContext(RootStateContext)
}

export function useAppState() {
    return useContext(AppStateContext)
}

export function useCounterState() {
    return useContext(CounterStateContext)
}

export function useRootDispatch() {
    return useContext(RootDispatchContext)
}