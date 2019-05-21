import React, { useState, useContext, useReducer } from "react"
import Post from "./app/component/post"
import Comment from "./app/component/comment"
import LastUpdated from "./app/component/lastupdated"
import * as api from "./app/api"

interface State {
    count: number
    posts: api.post.Post[]
    comments: api.comment.Comment[]
    lastUpdated: Date
}

export interface Context {
    state: State
    dispatch: any
}

const initialValue = {
    state: [],
    dispatch: () => {},
}

type Action =
    | {
        type: 'counter'
        value: number
    } | {
        type: 'posts'
        value: api.post.Post[]
    } | {
        type: 'comments'
        value: api.comment.Comment[]
    } | {
        type: 'lastUpdated'
        value: Date
    }

const initialState = {
    count: 0,
    posts: [],
    comments: [],
    lastUpdated: new Date,
}

const reducer = (state: any, action: Action) => {
    if (action.type === 'counter') {
        if (action.value == 0) {
            return {...state, count: 0 }
        } else {
            return {...state, count: state.count + action.value }
        }
    }
    if (action.type === 'posts') {
        return {...state, posts: action.value }
    }
    if (action.type === 'comments') {
        return {...state, comments: action.value}
    }
    if (action.type === 'lastUpdated') {
        return {...state, lastUpdated: action.value }
    }
    
    return state
}

export const AppContext = React.createContext<Context>({
    state: {
        count: 0,
        posts: [],
        comments: [],
        lastUpdated: new Date,
    },
    dispatch: () => {}
});

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        // TODO: ErrorBounday
        <AppContext.Provider value={{ state, dispatch}}>
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