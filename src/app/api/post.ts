import * as rest from "./rest/post"
import { ResultType } from "./rest"

export interface Post extends rest.Post {}

export const post = async (post: Post) : Promise<rest.PostResult> => {
    try {
        const response = await rest.post(post)

        if (response.ok !== true) {
            const body = await response.json() as null
            throw {type: ResultType.NG, body}
        } else {
            const body = await response.json() as rest.PostOk
            return {type: ResultType.OK, body}
        }
    } catch (error) {
        if (error instanceof Error) {
            throw {type: ResultType.ERR, body: error}
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
            throw {type: ResultType.NG, body}
        } else {
            const body = await response.json() as rest.PatchOk
            return {type: ResultType.OK, body}
        }
    } catch (error) {
        if (error instanceof Error) {
            throw {type: ResultType.ERR, body: error}
        } else {
            throw error
        }
    }
}

export const get = async(id: number) : Promise<rest.GetResult> => {
    try {
        const response = await rest.get(id)

        if (response.ok !== true) {
            const body = await response.json() as null
            throw {type: ResultType.NG, body}
        } else {
            const body = await response.json() as rest.GetOk
            return {type: ResultType.OK, body}
        }
    } catch (error) {
        if (error instanceof Error) {
            throw {type: ResultType.ERR, body: error}
        } else {
            throw error
        }
    }
}

export const list = async () : Promise<rest.ListResult> => {
    try {
        const response = await rest.list()

        if (response.ok !== true) {
            const body = await response.json() as null
            throw {type: ResultType.NG, body}
        } else {
            const body = await response.json() as Post[]
            return {type: ResultType.OK, body}
        }
    } catch (error) {
        if (error instanceof Error) {
            throw {type: ResultType.ERR, body: error}
        } else {
            throw error
        }
    }
}