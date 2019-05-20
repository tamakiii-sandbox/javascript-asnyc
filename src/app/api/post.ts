import * as post from "../../api/post"

export const postPost = async (entity: post.Post) : Promise<post.PostResult> => {
    try {
        const response = await post.post(entity)

        if (response.ok !== true) {
            const body = await response.json() as post.PostNg
            return {ok: false, error: false, body}
        } else {
            const body = await response.json() as post.PostOk
            return {ok: true, error: false, body}
        }
    } catch (error) {
        if (error instanceof Error) {
            return {ok: false, error: true, body: {message: error.message}}
        } else {
            throw error
        }
    }
}
