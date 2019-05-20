export interface Post {
    id?: number
    title: string
    author: string
}

export interface PostBody {
    id: number
    title: string
    author: string
}

export interface ApiError {
    message: string
}

export type ApiResult<Ok, Error> =
    | {
        ok: true
        body: Ok
    }
    | {
        ok: false
        body: Error
    }

export type PostResult = ApiResult<PostBody, ApiError>;

const headers = {
    "X-Requested-With": "XMLHttpRequest",
    "Accept": "application/json",
    "Content-Type": "application/json",
}

export const post = (post: Post) => (
    fetch('http://localhost:3000/api/posts', {
        method: "POST",
        credentials: "same-origin",
        headers,
        body: JSON.stringify(post),
    })
)