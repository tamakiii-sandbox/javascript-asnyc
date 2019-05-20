import * as post from "./api/post"

class MyError extends Error {}

const postPost = async (entity: post.Post) : Promise<post.PostResult> => {
    try {
        const response = await post.post(entity)

        if (response.ok !== true) {
            const body = await response.json() as post.PostBody
            return {status: true, body}
        } else {
            const body = await response.json() as post.PostBody
            return {status: true, body}
        }
    } catch (error) {
        if (error instanceof Error) {
            return { status: false, body: { message: error.message } }
        } else {
            throw error
        }
    }
}

try {
    const response = postPost({
        // id: 2,
        title: (new Date()).toUTCString(),
        author: "",
    })

    response.then(response => {
        window.console.log(response)
    })
} catch (error) {
    if (error instanceof MyError) {
        window.console.log(error)
    } else {
        throw error
    }
}
window.console.log('hello')
