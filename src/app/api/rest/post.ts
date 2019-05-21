import { Result, ResultType, Err, headers } from "."

export interface Post {
    id?: number
    title: string
    author: string
}

export interface PostOk {
    id: number
    title: string
    author: string
}

export type PostResult = Result<PostOk, null, Err>

export type GetsResult = Result<Post[], null, Err>

export const post = (post: Post) => (
    fetch('http://localhost:3000/api/posts', {
        method: "POST",
        credentials: "same-origin",
        headers,
        body: JSON.stringify(post),
    })
)

export const gets = () => (
    fetch('http://localhost:3000/api/posts', {
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