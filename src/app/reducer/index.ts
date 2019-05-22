import { combineReducers, AnyAction } from "redux"
import * as app from "./app"
import * as counter from "./counter"

export interface RootState {
    app: app.AppState
}

export type Action = app.Action | counter.Action;

export const reducer = combineReducers({
    app: app.reducer,
    counter: counter.reducer,
})