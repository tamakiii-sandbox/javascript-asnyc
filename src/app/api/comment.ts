import * as rest from "./rest/comment"
import { ResultType } from "./rest"

export interface Comment extends rest.Comment {}

export const post = async (comment: Comment) : Promise<rest.PostResult> => {
    try {
        const response = await rest.post(comment)

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

export const patch = async (comment: Comment) : Promise<rest.PatchResult> => {
    try {
        const response = await rest.patch(comment)

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

export const list = async () : Promise<rest.ListResult> => {
    try {
        const response = await rest.list()

        if (response.ok !== true) {
            const body = await response.json() as null
            throw {type: ResultType.NG, body}
        } else {
            const body = await response.json() as Comment[]
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