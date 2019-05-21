import React, { useState, useContext } from "react"
import * as api from "../../api"
import { AppContext, Context } from "../../../app";
import {  ResultType } from "../../api/rest"

const get = async (id: number) => {
    try {
        const response = await api.post.get(id)
        return response
    } catch (error) {
        throw error
    }
}

const post = async (title: string, author: string, context: Context) => {
    try {
        const response = await api.post.post({title, author})
        window.console.log(response.body)
        context.dispatch({ type: 'lastUpdated', value: new Date})
    } catch (error) {
        throw error
    }
}

const patch = async (id: number, title: string, author: string, context: Context) => {
    try {
        const response = await api.post.patch({id, title, author})
        window.console.log(response.body)
        context.dispatch({type: 'lastUpdated', value: new Date})
    } catch (error) {
        throw error
    }
}

export default function Component() {
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>((new Date()).toUTCString());
    const [author, setAuthor] = useState<string>("Test man");
    const context = useContext<Context>(AppContext);

    const resetPost = () => {
        setId(0)
        setTitle((new Date()).toUTCString())
        setAuthor("Test man")
    }

    const loadPost = async (id: number) => {
        const response = await get(id)

        if (response.type == ResultType.OK) {
            const post = response.body
            setId(post.id)
            setTitle(post.title)
            setAuthor(post.author)
        } else {
            throw Error //
        }
    }

    return (
        <>
            <select name="id" onChange={e => !e.target.value ? resetPost() : loadPost(parseInt(e.target.value))}>
                <option value="">--</option>
                {context.state.posts.map((post: api.post.Post) => (
                    <option key={post.id} value={post.id}>{post.title}</option>
                ))}
            </select>
            <br />
            <input
                type="text"
                name="title"
                placeholder="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            /><br />
            <input
                type="text"
                name="author"
                placeholder="author"
                value={author}
                onChange={e => setAuthor(e.target.value)}
            /><br />

            <button onClick={() => id === 0 ? post(title, author, context) : patch(id, title, author, context)}>{id === 0 ? "Post" : "Patch"}</button>
        </>
    )
}