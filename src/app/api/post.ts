import * as post from "../../api/post"

export const postPost = async (entity: post.Post) : Promise<post.PostResult> => {
    try {
        const response = await post.post(entity)

        if (response.ok !== true) {
            const body = await response.json() as post.PostNg
            return {type: post.ApiResultType.NG, body}
        } else {
            const body = await response.json() as post.PostOk
            return {type: post.ApiResultType.OK, body}
        }
    } catch (error) {
        if (error instanceof Error) {
            return {type: post.ApiResultType.ERROR, body: error}
        } else {
            throw error
        }
    }
}
