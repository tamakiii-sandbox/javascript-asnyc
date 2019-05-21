import React, { useState, useEffect } from "react"
import * as rest from "../../api/post"
import * as api from "../api/post"

interface Props {
    lastUpdated: Date
}

export default function Component(props: Props) {
    const [posts, setPosts] = useState<rest.Post[]>([]);

    useEffect(() => {
        (async () => {
            const response = await api.gets()
            if (response.type == rest.ApiResultType.OK) {
                setPosts(response.body)
            }
        })();
    }, [props.lastUpdated])

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