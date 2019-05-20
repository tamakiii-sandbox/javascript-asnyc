import React from "react"
import * as post from "../../api/post"

class MyError extends Error {}

const postPost = async (entity: post.Post) : Promise<post.PostResult> => {
    try {
        const response = await post.post(entity)

        if (response.ok !== true) {
            const body = await response.json() as post.PostBody
            return {ok: true, body}
        } else {
            const body = await response.json() as post.PostBody
            return {ok: true, body}
        }
    } catch (error) {
        if (error instanceof Error) {
            return {ok: false, body: {message: error.message}}
        } else {
            throw error
        }
    }
}

const doPostPost = (): void => {
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

}
interface Props {}

export default function Component(props: Props) {
    return (
        <>
            <h2>Post component</h2>
            <button onClick={doPostPost}>Post</button>
        </>
    )
}