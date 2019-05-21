import React, { useState, useContext, useReducer } from "react"
import Post from "./app/component/post"
import Comment from "./app/component/comment"
import LastUpdated from "./app/component/lastupdated"
import * as api from "./app/api"

export interface Context {
    lastUpdated: Date
    setContext: React.Dispatch<React.SetStateAction<Context>>
    comments: api.comment.Comment[]
    posts: api.post.Post[]
    state: any
    dispatch: any
}

const initialValue = {
    lastUpdated: new Date,
    setContext: () => {},
    comments: [],
    posts: [],
    state: [],
    dispatch: () => {},
}

enum ActionTypes {
    INCREMENT = 'increment',
    DECREMENT = 'decrement',
    RESET = 'reset',
}

type ActionType = {
    type: ActionTypes
}

const initialState = {
    count: 0
}

const reducer = (state: any, action: ActionType) => {
    switch (action.type) {
        case ActionTypes.RESET:
            return initialState
        case ActionTypes.INCREMENT:
            return { count: state.count + 1 }
        case ActionTypes.DECREMENT:
            return { count: state.count - 1 }
        default:
            return state;
    }
}

export const AppContext = React.createContext<Context>(initialValue);

export default function App() {
    const [context, setContext] = useState<Context>(useContext<Context>(AppContext))
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        // TODO: ErrorBounday
        <AppContext.Provider value={{...context, setContext, state, dispatch}}>
            <h1>Hello</h1>
            <hr />
            <Post />
            <hr />
            <Comment />
            <hr />
            <LastUpdated />
            <hr />
            <input type="text" value={state.count} readOnly></input>
            <button onClick={() => dispatch({ type: ActionTypes.RESET })}>reset</button>
            <button onClick={() => dispatch({ type: ActionTypes.INCREMENT })}>+</button>
            <button onClick={() => dispatch({ type: ActionTypes.DECREMENT })}>-</button>
        </AppContext.Provider>
    )
}