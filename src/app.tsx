import React from "react"
import PostPost from "./app/component/form/post"
import PostComment from "./app/component/form/comment"
import Post from "./app/component/post"

interface Props {}

export default function App(props: Props) {
    return (
        // TODO: ErrorBounday
        <div>
            <h1>Hello</h1>
            <Post></Post>
            <PostPost></PostPost>
            <PostComment></PostComment>
        </div>
    )
}