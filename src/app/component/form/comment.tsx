import React, { useState, useContext } from "react"
import * as api from "../../api"
import { useAppState, useAppDispatch } from "../../context/app";

const post = async (body: string, postId: number, dispatch: any) => {
    try {
        const response = await api.comment.post({body, postId})
        dispatch({ type: 'lastUpdated', value: new Date})
    } catch (error) {
        throw error
    }
}

export default function Component() {
    const [body, setBody] = useState<string>("Awsome comment")
    const [postId, setPostId] = useState<number>(2)
    const state = useAppState()
    const dispatch = useAppDispatch()
    window.console.log(state.posts)

    return (
        <>
            <select
                name="post-id"
                value={postId}
                onChange={e => setPostId(parseInt(e.target.value))}
            >
                {state.posts.map((post: api.post.Post) => (
                    <option key={post.id} value={post.id}>{post.title}</option>
                ))}
            </select>
            <textarea
                name="body"
                value={body}
                onChange={e => setBody(e.target.value)}
            ></textarea>

            <button onClick={() => post(body, postId, dispatch)}>Comment</button>
        </>
    )
}