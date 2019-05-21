import React, { useContext } from "react"
import { AppContext, Context } from "../../app"

export default function Component() {
    const context = useContext<Context>(AppContext)
    window.console.log(context)

    return (
        <strong>{context.state.lastUpdated.toUTCString()}</strong>
    )
}