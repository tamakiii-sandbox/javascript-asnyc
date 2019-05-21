import React, { useState } from "react"
import PostPost from "./app/component/form/post"
import PostComment from "./app/component/form/comment"
import Post from "./app/component/post"
import LastUpdated from "./app/component/lastupdated"

export interface Context {
    lastUpdated: Date
    setState: React.Dispatch<React.SetStateAction<Context>>
}

const initialValue = {
    lastUpdated: new Date,
    setState: () => {},
}

export const AppContext = React.createContext<Context>(initialValue);

export default function App() {
    const [state, setState] = useState<Context>(initialValue)

    return (
        // TODO: ErrorBounday
        <AppContext.Provider value={{...state, setState}}>
            <h1>Hello</h1>
            <Post></Post>
            <PostPost></PostPost>
            <PostComment></PostComment>
            <div>
                <LastUpdated></LastUpdated>
            </div>
        </AppContext.Provider>
    )
}