import React from "react"
import PostPost from "./app/component/post/post"
import PostComment from "./app/component/post/comment"

interface Props {}

export default function App(props: Props) {
    return (
        // TODO: ErrorBounday
        <div>
            <h1>Hello</h1>
            <PostPost></PostPost>
            <PostComment></PostComment>
        </div>
    )
}