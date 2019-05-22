import React, { useReducer } from "react"
import { RootStateContext, DispatchContext } from "./app/context/app"
import Post from "./app/component/post"
import Comment from "./app/component/comment"
import LastUpdated from "./app/component/lastupdated"
import CommentMulti from "./app/component/form/comment_multi"
import * as reducer from "./app/reducer"

export default function App() {
    const initialState = reducer.reducer(undefined, {
        type: '__dummy__'
    })
    window.console.log(initialState)

    const [state, dispatch] = useReducer(reducer.reducer, initialState)

    return (
        // TODO: ErrorBounday
        <RootStateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <h1>Hello</h1>
                <hr />
                <Post />
                <hr />
                <Comment />
                <hr />
                <LastUpdated />
                <hr />
                <input type="text" value={state.counter.count} readOnly></input>
                <button onClick={() => dispatch({ type: 'counter', payload: 0 })}>reset</button>
                <button onClick={() => dispatch({ type: 'counter', payload: 1 })}>+</button>
                <button onClick={() => dispatch({ type: 'counter', payload: -1 })}>-</button>
                <hr />
                <CommentMulti />
            </DispatchContext.Provider>
        </RootStateContext.Provider>
    )
}