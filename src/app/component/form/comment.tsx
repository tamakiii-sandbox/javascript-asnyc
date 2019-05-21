import React, { useState } from "react"
import * as api from "../../api"
import { AppContext, Context } from "../../../app"

const post = async (body: string, postId: number, context: Context) => {
    try {
        const response = await api.comment.post({body, postId})
        window.console.log(response)
        context.setContext({...context, lastUpdated: new Date})
    } catch (error) {
        throw error
    }
}

export default function Component() {
    const [body, setBody] = useState<string>("Awsome comment");
    const [postId, setPostId] = useState<number>(2);

    return (
        <AppContext.Consumer>
            {context => (
                <>
                    <select
                        name="post-id"
                        value={postId}
                        onChange={e => setPostId(parseInt(e.target.value))}
                    >
                        {context.posts.map((post: api.post.Post) => (
                            <option key={post.id} value={post.id}>{post.title}</option>
                        ))}
                    </select>
                    <textarea
                        name="body"
                        value={body}
                        onChange={e => setBody(e.target.value)}
                    ></textarea>

                    <button onClick={() => post(body, postId, context)}>Comment</button>
                </>
            )}
        </AppContext.Consumer>
    )
}