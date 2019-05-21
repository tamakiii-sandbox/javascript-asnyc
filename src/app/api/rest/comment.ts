import { Err, Result, ResultType, headers } from "."

export interface Comment {
    id?: number
    body: string
    postId: number
}

export interface PostOk {
    id: number
    body: string
    postId: number
}

export type PostResult = Result<PostOk, null, Err>

export const post = (comment: Comment) => (
    fetch('http://localhost:3000/api/comments', {
        method: "POST",
        credentials: "same-origin",
        headers,
        body: JSON.stringify(comment),
    })
)

export {
    Err,
    Result,
    ResultType,
}