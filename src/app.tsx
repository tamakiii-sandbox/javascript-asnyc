import React from "react"
import Post from "./app/component/post"
import Comment from "./app/component/comment"

interface Props {}

export default function App(props: Props) {
    return (
        // TODO: ErrorBounday
        <div>
            <h1>Hello</h1>
            <Post></Post>
            <Comment></Comment>
        </div>
    )
}