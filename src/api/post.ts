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

export interface ApiError extends Error {}

export enum ApiResultType {
    OK = "ok",
    NG= "ng",
    ERROR= "error",
}

export type ApiResult<Ok, Ng, Error> =
    | {
        type: ApiResultType.OK
        body: Ok
    }
    | {
        type: ApiResultType.NG
        body: Ng
    }
    | {
        type: ApiResultType.ERROR
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