import * as rest from "./rest/comment"

export interface Comment extends rest.Comment {}

export const post = async (entity: Comment) : Promise<rest.PostResult> => {
    try {
        const response = await rest.post(entity)

        if (response.ok !== true) {
            const body = await response.json() as null
            return {type: rest.ResultType.NG, body}
        } else {
            const body = await response.json() as rest.PostOk
            return {type: rest.ResultType.OK, body}
        }
    } catch (error) {
        if (error instanceof Error) {
            return {type: rest.ResultType.ERR, body: error}
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
            return {type: rest.ResultType.NG, body}
        } else {
            const body = await response.json() as Comment[]
            return {type: rest.ResultType.OK, body}
        }
    } catch (error) {
        if (error instanceof Error) {
            return {type: rest.ResultType.ERR, body: error}
        } else {
            throw error
        }
    }
}