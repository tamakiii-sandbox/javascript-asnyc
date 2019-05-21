import * as rest from "./rest/comment"

export interface Comment extends rest.Comment {}

export const post = async (entity: Comment) : Promise<rest.PostResult> => {
    try {
        const response = await rest.post(entity)

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

export const patch = async (entity: Comment) : Promise<rest.PatchResult> => {
    try {
        const response = await rest.patch(entity)

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

export const list = async () : Promise<rest.ListResult> => {
    try {
        const response = await rest.list()

        if (response.ok !== true) {
            const body = await response.json() as null
            throw {type: rest.ResultType.NG, body}
        } else {
            const body = await response.json() as Comment[]
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