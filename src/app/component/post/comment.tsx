import React, { useState } from "react"
import * as api from "../../api/comment"

interface Props {}

const doPostComment = (body: string, postId: number) => {
    try {
        const response = api.post({body, postId})

        response.then(response => {
            window.console.log(response)
        })
    } catch (error) {
        throw error
    }
}

export default function Component(props: Props) {
    const [body, setBody] = useState<string>("Awsome comment");
    const [postId, setPostId] = useState<number>(2);

    return (
        <>
            <h2>Comment component</h2>
            <select
                name="post-id"
                value={postId}
                onChange={e => setPostId(parseInt(e.target.value))}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <textarea
                name="body"
                value={body}
                onChange={e => setBody(e.target.value)}
            ></textarea>

            <button onClick={e => doPostComment(body, postId)}>Comment</button>
        </>
    )
}