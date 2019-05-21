import * as rest from "./rest/comment"

export const post = async (entity: rest.Comment) : Promise<rest.PostResult> => {
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
            const body = await response.json() as rest.Comment[]
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