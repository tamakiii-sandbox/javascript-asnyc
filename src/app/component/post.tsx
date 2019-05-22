import React, { useState, useEffect, useContext } from "react"
import * as rest from "../api/rest/post"
import * as api from "../api/post"
import PostForm from "./form/post"
import { useAppDispatch, useAppState } from "../context/app";

export default function Component() {
    const [posts, setPosts] = useState<rest.Post[]>([])
    const state = useAppState()
    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            const response = await api.list()
            if (response.type == rest.ResultType.OK) {
                const posts = response.body
                setPosts(posts)
                dispatch({ type: 'posts', value: posts})
            }
        })();
    }, [state.lastUpdated])

    return (
        <>
            <h2>Post Component</h2>
            <ul>
                {posts.map((post: rest.Post) => (
                    <li key={post.id}>{post.title}({post.author})</li>
                ))}
            </ul>

            <h2>Form</h2>
            <PostForm />
        </>
    )
}