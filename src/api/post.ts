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

export interface PostNg {}

export interface ApiError {
    message: string
}

export type ApiResult<Ok, Ng, Error> =
    | {
        ok: true
        error: false
        body: Ok
    }
    | {
        ok: false
        error: false
        body: Ng
    }
    | {
        ok: false
        error: true
        body: Error
    }

export type PostResult = ApiResult<PostOk, PostNg, ApiError>;

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