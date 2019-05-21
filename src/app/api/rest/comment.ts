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
export type ListResult = Result<Comment[], null, Err>

export const post = (comment: Comment) => (
    fetch('http://localhost:3000/api/comments', {
        method: "POST",
        credentials: "same-origin",
        headers,
        body: JSON.stringify(comment),
    })
)

export const list = () => (
    fetch('http://localhost:3000/api/comments', {
        method: "GET",
        credentials: "same-origin",
        headers,
    })
)

export {
    Err,
    Result,
    ResultType,
}