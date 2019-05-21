import React, { useState, useContext, useReducer } from "react"
import Post from "./app/component/post"
import Comment from "./app/component/comment"
import LastUpdated from "./app/component/lastupdated"
import * as reducer from "./app/reducer"

export interface Context {
    state: reducer.State
    dispatch: React.Dispatch<reducer.Action>
}

export const AppContext = React.createContext<Context>({
    state: reducer.initialState,
    dispatch: () => {}
});

export default function App() {
    const [state, dispatch] = useReducer(reducer.reducer, reducer.initialState);

    return (
        // TODO: ErrorBounday
        <AppContext.Provider value={{ state, dispatch }}>
            <h1>Hello</h1>
            <hr />
            <Post />
            <hr />
            <Comment />
            <hr />
            <LastUpdated />
            <hr />
            <input type="text" value={state.count} readOnly></input>
            <button onClick={() => dispatch({ type: 'counter', value:  0 })}>reset</button>
            <button onClick={() => dispatch({ type: 'counter', value:  1 })}>+</button>
            <button onClick={() => dispatch({ type: 'counter', value: -1 })}>-</button>
        </AppContext.Provider>
    )
}