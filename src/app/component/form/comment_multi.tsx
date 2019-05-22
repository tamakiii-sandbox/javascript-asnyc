import React, { useState } from "react"
import update from 'immutability-helper';
import * as api from "../../api"
import { useRootState } from "../../context";

const postMulti = async (post: api.post.Post | undefined, comments: api.comment.Comment[]) => {
    window.console.log(post, post ? post.id : undefined)
    if (post === undefined || post.id === undefined) {
        return false
    }

    try {
        const promises = comments.map((comment: api.comment.Comment, index: number) => {
            if (index === 2) {
                return api.comment.patch({body: comment.body, postId: post.id as number})
            }
            return api.comment.post({ body: comment.body, postId: post.id as number})
        })

        Promise.all(promises)
            .then((results) => {
                window.console.log('then')
                window.console.log(results)
            })
            .catch((reason) => {
                window.console.log('caught')
                window.console.log(reason)
            })

        window.console.log('postmulti done')
    } catch (error) {
        throw error
    }
}

export default function Component() {
    const [comments, setComments] = useState<api.comment.Comment[]>([
        {body: "hello", postId: 0},
        {body: "world", postId: 0},
    ]);
    const [post, setPost] = useState<api.post.Post | undefined>(undefined);
    const state = useRootState()

    const onChangeCommentBody = async (index: number, body: string) => {
        setComments(update(comments, {[index]: {body: {$set: body}}}))
    }

    const onChangePost= (id: number) => {
        setPost(state.app.posts.find((post: api.post.Post) => (
            post ? post.id == id : false
        )))
    }

    return (
        <>
            <h2>Multi comment</h2>
            <select name="post" onChange={e => onChangePost(parseInt(e.target.value))}>
                <option value="">--</option>
                {state.app.posts.map((post: api.post.Post) => (
                    <option key={post.id} value={post.id}>{post.title}</option>
                ))}
            </select>
            <br />
            {comments.map((comment: api.comment.Comment, index) => (
                <div key={index}>
                    <input type="text" value={comment.body} onChange={e => onChangeCommentBody(index, e.target.value)}></input>
                </div>
            ))}
            <button onClick={() => setComments([...comments, {id: 0, body: "", postId: 0}])}>+</button>
            <button onClick={() => postMulti(post, comments)}>Post</button>
        </>
    )
}