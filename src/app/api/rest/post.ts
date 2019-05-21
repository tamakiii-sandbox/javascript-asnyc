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

export interface PatchOk {
    id: number
    title: string
    author: string
}

export interface GetOk {
    id: number
    title: string
    author: string
}

export type PostResult = Result<PostOk, null, Err>
export type PatchResult = Result<PatchOk, null, Err>
export type GetResult = Result<GetOk, null, Err>
export type ListResult = Result<Post[], null, Err>

export const post = (post: Post) => (
    fetch('http://localhost:3000/api/posts', {
        method: "POST",
        credentials: "same-origin",
        headers,
        body: JSON.stringify(post),
    })
)

export const patch = (post: Post) => (
    fetch('http://localhost:3000/api/posts', {
        method: "PATCH",
        credentials: "same-origin",
        headers,
        body: JSON.stringify(post),
    })
)

export const get = (id: number) => (
    fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "GET",
        credentials: "same-origin",
        headers,
    })
)

export const list = () => (
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