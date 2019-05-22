import { combineReducers, AnyAction } from "redux"
import * as app from "./app"

export interface RootState {
    app: app.AppState
}

export const reducer = combineReducers({
    app: app.reducer
})