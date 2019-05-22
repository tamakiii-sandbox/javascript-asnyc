import { combineReducers } from "redux"
import * as app from "./app"
import * as counter from "./counter"

export interface State {
    app: app.AppState,
    counter: counter.State,
}

export type Action = app.Action | counter.Action;

export const initialState: State = {
    app: app.initialState,
    counter: counter.initialState,
}

export const reducer = combineReducers({
    app: app.reducer,
    counter: counter.reducer,
})