import React, { useState, useEffect } from "react";
import * as rest from "../api/rest/comment";
import * as api from "../api/comment"
import Form from "./form/comment"
import { useAppState, useAppDispatch } from "../context/app";

export default function Component() {
    const [comments, setComments] = useState<rest.Comment[]>([])
    const state = useAppState()
    const dispatch = useAppDispatch()

    useEffect(() => {
        (async() => {
            const response = await api.list();
            if (response.type == rest.ResultType.OK) {
                const comments = response.body
                setComments(comments)
                dispatch({ type: 'comments', payload: comments})
            }
        })()
    }, [state.app.lastUpdated])

    return (
        <>
            <h2>Comment Component</h2>
            <ul>
                {comments.map((comment: rest.Comment) => (
                    <li key={comment.id}>{comment.body}(post={comment.postId})</li>
                ))}
            </ul>
            <h2>Form</h2>
            <Form></Form>
        </>
    )
}