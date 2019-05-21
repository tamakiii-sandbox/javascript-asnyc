import React, { useState, useContext, useEffect } from "react";
import { AppContext, Context } from "../../app";
import * as rest from "../api/rest/comment";
import * as api from "../api/comment"
import Form from "./form/comment"

export default function Component() {
    const [comments, setComments] = useState<rest.Comment[]>([])
    const context = useContext<Context>(AppContext);

    useEffect(() => {
        (async() => {
            const response = await api.list();
            if (response.type == rest.ResultType.OK) {
                const comments = response.body
                setComments(comments)
                // context.setContext({...context, comments})
            }
        })()
    }, [context.lastUpdated])

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