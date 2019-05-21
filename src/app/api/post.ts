import * as rest from "./rest/post"

export const post = async (entity: rest.Post) : Promise<rest.PostResult> => {
    try {
        const response = await rest.post(entity)

        if (response.ok !== true) {
            const body = await response.json() as rest.PostNg
            return {type: rest.ApiResultType.NG, body}
        } else {
            const body = await response.json() as rest.PostOk
            return {type: rest.ApiResultType.OK, body}
        }
    } catch (error) {
        if (error instanceof Error) {
            return {type: rest.ApiResultType.ERROR, body: error}
        } else {
            throw error
        }
    }
}

export const gets = async () : Promise<rest.GetsResult> => {
    try {
        const response = await rest.gets()

        if (response.ok !== true) {
            const body = await response.json() as null
            return {type: rest.ApiResultType.NG, body}
        } else {
            const body = await response.json() as rest.Post[]
            return {type: rest.ApiResultType.OK, body}
        }
    } catch (error) {
        if (error instanceof Error) {
            return {type: rest.ApiResultType.ERROR, body: error}
        } else {
            throw error
        }
    }
}