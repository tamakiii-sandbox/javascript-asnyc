import React, { useState } from "react"
import * as api from "../../api/post"
import { AppContext, Context } from "../../../app";

const post = async (title: string, author: string, context: Context) => {
    try {
        const response = await api.post({title, author})
        window.console.log(response.body)
        context.setContext({...context, lastUpdated: new Date})
    } catch (error) {
        throw error
    }
}

export default function Component() {
    const [title, setTitle] = useState<string>((new Date()).toUTCString());
    const [author, setAuthor] = useState<string>("Test man");

    return (
        <AppContext.Consumer>
            {context => (
                <>
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

                    <button onClick={() => post(title, author, context)}>Post</button>
                </>
            )}
        </AppContext.Consumer>
    )
}