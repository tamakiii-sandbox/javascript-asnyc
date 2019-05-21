import React from "react"
import PostPost from "./app/component/form/post"
import PostComment from "./app/component/form/comment"
import Post from "./app/component/post"
import LastUpdated from "./app/component/lastupdated"

interface Context {
    lastUpdated: Date
}

const initialValue = {
    lastUpdated: new Date
}

export const Context = React.createContext<Context>(initialValue);

export default function App() {
    return (
        // TODO: ErrorBounday
        <Context.Provider value={initialValue}>
            <h1>Hello</h1>
            <Post></Post>
            <PostPost></PostPost>
            <PostComment></PostComment>
            <div>
                <LastUpdated></LastUpdated>
            </div>
        </Context.Provider>
    )
}