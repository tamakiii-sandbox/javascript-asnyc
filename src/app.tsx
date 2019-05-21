import React, { useState } from "react"
import Post from "./app/component/post"
import Comment from "./app/component/comment"
import LastUpdated from "./app/component/lastupdated"

export interface Context {
    lastUpdated: Date
    setContext: React.Dispatch<React.SetStateAction<Context>>
}

const initialValue = {
    lastUpdated: new Date,
    setContext: () => {},
}

export const AppContext = React.createContext<Context>(initialValue);

export default function App() {
    const [context, setContext] = useState<Context>(initialValue)

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