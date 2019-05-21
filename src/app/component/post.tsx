import React, { useState, useEffect, useContext } from "react"
import * as rest from "../api/rest/post"
import * as api from "../api/post"
import { AppContext, Context } from "../../app";
import PostForm from "./form/post"

export default function Component() {
    const [posts, setPosts] = useState<rest.Post[]>([])
    const context = useContext<Context>(AppContext)

    useEffect(() => {
        (async () => {
            const response = await api.list()
            if (response.type == rest.ResultType.OK) {
                const posts = response.body
                setPosts(posts)
                context.setContext({...context, posts})
            }
        })();
    }, [context.lastUpdated])

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