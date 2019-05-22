import React, { useReducer } from "react"
import { RootStateContext, RootDispatchContext, CounterStateContext } from "./app/context/app"
import Post from "./app/component/post"
import Comment from "./app/component/comment"
import Counter from "./app/component/counter"
import LastUpdated from "./app/component/lastupdated"
import CommentMulti from "./app/component/form/comment_multi"
import { reducer, initialState } from "./app/reducer"

export default function App() {
    // const initialState = reducer.reducer(undefined, { type: '__initialize__' })
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        // TODO: ErrorBounday
        <RootStateContext.Provider value={state}>
            <RootDispatchContext.Provider value={dispatch}>
                <CounterStateContext.Provider value={state.counter}>
                    <h1>Hello</h1>
                    <hr />
                    <Post />
                    <hr />
                    <Comment />
                    <hr />
                    <LastUpdated />
                    <hr />
                    <Counter />
                    <hr />
                    <CommentMulti />
                </CounterStateContext.Provider>
            </RootDispatchContext.Provider>
        </RootStateContext.Provider>
    )
}