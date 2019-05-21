import { ApiResult, ApiResultType, ApiError, headers } from "."

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

export type PostResult = ApiResult<PostOk, null, ApiError>

export type GetsResult = ApiResult<Post[], null, ApiError>

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
    ApiError,
    ApiResult,
    ApiResultType,
}