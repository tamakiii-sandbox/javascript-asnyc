import * as rest from "./rest/post"

export interface Post extends rest.Post {}
export type PostResult = rest.PostResult
export type GetResult = rest.GetResult
export type ListResult = rest.ListResult

export const post = async (post: Post) : Promise<rest.PostResult> => {
    try {
        const response = await rest.post(post)

        if (response.ok !== true) {
            const body = await response.json() as null
            throw {type: rest.ResultType.NG, body}
        } else {
            const body = await response.json() as rest.PostOk
            return {type: rest.ResultType.OK, body}
        }
    } catch (error) {
        if (error instanceof Error) {
            throw {type: rest.ResultType.ERR, body: error}
        } else {
            throw error
        }
    }
}

export const patch = async (post: Post) : Promise<rest.PatchResult> => {
    try {
        const response = await rest.patch(post)

        if (response.ok !== true) {
            const body = await response.json() as null
            throw {type: rest.ResultType.NG, body}
        } else {
            const body = await response.json() as rest.PatchOk
            return {type: rest.ResultType.OK, body}
        }
    } catch (error) {
        if (error instanceof Error) {
            throw {type: rest.ResultType.ERR, body: error}
        } else {
            throw error
        }
    }
}

export const get = async(id: number) : Promise<GetResult> => {
    try {
        const response = await rest.get(id)

        if (response.ok !== true) {
            const body = await response.json() as null
            throw {type: rest.ResultType.NG, body}
        } else {
            const body = await response.json() as rest.GetOk
            return {type: rest.ResultType.OK, body}
        }
    } catch (error) {
        if (error instanceof Error) {
            throw {type: rest.ResultType.ERR, body: error}
        } else {
            throw error
        }
    }
}

export const list = async () : Promise<ListResult> => {
    try {
        const response = await rest.list()

        if (response.ok !== true) {
            const body = await response.json() as null
            throw {type: rest.ResultType.NG, body}
        } else {
            const body = await response.json() as Post[]
            return {type: rest.ResultType.OK, body}
        }
    } catch (error) {
        if (error instanceof Error) {
            throw {type: rest.ResultType.ERR, body: error}
        } else {
            throw error
        }
    }
}