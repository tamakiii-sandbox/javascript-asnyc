import React from "react"
import Post from "./app/component/post"

interface Props {}

export default function App(props: Props) {
    return (
        // TODO: ErrorBounday
        <div>
            <h1>Hello</h1>
            <Post></Post>
        </div>
    )
}