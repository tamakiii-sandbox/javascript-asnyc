import React, { useState, useEffect, useContext } from "react"
import * as rest from "../../api/post"
import * as api from "../api/post"
import { AppContext } from "../../app";

export default function Component() {
    const [posts, setPosts] = useState<rest.Post[]>([])
    const context = useContext(AppContext)

    useEffect(() => {
        (async () => {
            const response = await api.gets()
            if (response.type == rest.ApiResultType.OK) {
                setPosts(response.body)
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
        </>
    )
}