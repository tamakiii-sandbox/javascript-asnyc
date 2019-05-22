import React, { useReducer } from "react"
import { AppStateContext, AppDispatchContext } from "./app/context/app"
import Post from "./app/component/post"
import Comment from "./app/component/comment"
import LastUpdated from "./app/component/lastupdated"
import CommentMulti from "./app/component/form/comment_multi"
import * as reducer from "./app/reducer"

export default function App() {
    const [state, dispatch] = useReducer(reducer.reducer, reducer.initialState)

    return (
        // TODO: ErrorBounday
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                <h1>Hello</h1>
                <hr />
                <Post />
                <hr />
                <Comment />
                <hr />
                <LastUpdated />
                <hr />
                <input type="text" value={state.count} readOnly></input>
                <button onClick={() => dispatch({ type: 'counter', value: 0 })}>reset</button>
                <button onClick={() => dispatch({ type: 'counter', value: 1 })}>+</button>
                <button onClick={() => dispatch({ type: 'counter', value: -1 })}>-</button>
                <hr />
                <CommentMulti />
            </AppDispatchContext.Provider>
        </AppStateContext.Provider>
    )
}