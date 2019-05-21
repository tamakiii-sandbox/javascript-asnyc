import React, { useState, useContext } from "react"
import Post from "./app/component/post"
import Comment from "./app/component/comment"
import LastUpdated from "./app/component/lastupdated"
import * as api from "./app/api"

export interface Context {
    lastUpdated: Date
    setContext: React.Dispatch<React.SetStateAction<Context>>
    comments: api.comment.Comment[]
    posts: api.post.Post[]
}

const initialValue = {
    lastUpdated: new Date,
    setContext: () => {},
    comments: [],
    posts: [],
}

export const AppContext = React.createContext<Context>(initialValue);

export default function App() {
    const [context, setContext] = useState<Context>(useContext<Context>(AppContext))

    return (
        // TODO: ErrorBounday
        <AppContext.Provider value={{...context, setContext}}>
            <h1>Hello</h1>
            <hr />
            <Post />
            <hr />
            <Comment />
            <hr />
            <LastUpdated />
        </AppContext.Provider>
    )
}