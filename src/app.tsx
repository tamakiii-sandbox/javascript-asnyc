import React, { useReducer, useCallback, useDebugValue } from "react"
import { RootStateContext, RootDispatchContext } from "./app/context/app"
import Post from "./app/component/post"
import Comment from "./app/component/comment"
import LastUpdated from "./app/component/lastupdated"
import CommentMulti from "./app/component/form/comment_multi"
import { reducer, initialState } from "./app/reducer"

export default function App() {
    // const initialState = reducer.reducer(undefined, { type: '__initialize__' })
    const [state, dispatch] = useReducer(reducer, initialState)

    const reset = useCallback(() => dispatch({ type: 'counter', payload: 0 }), [])
    const increment = useCallback(() => dispatch({ type: 'counter', payload: 1 }), [])
    const decrement = useCallback(() => dispatch({ type: 'counter', payload: -1 }), [])

    return (
        // TODO: ErrorBounday
        <RootStateContext.Provider value={state}>
            <RootDispatchContext.Provider value={dispatch}>
                <h1>Hello</h1>
                <hr />
                <Post />
                <hr />
                <Comment />
                <hr />
                <LastUpdated />
                <hr />
                <input type="text" value={state.counter.count} readOnly></input>
                <button onClick={reset}>reset</button>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <hr />
                <CommentMulti />
            </RootDispatchContext.Provider>
        </RootStateContext.Provider>
    )
}