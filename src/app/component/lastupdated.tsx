import React from "react"
import { Context } from "../../app"

export default function Component() {
    return (
        <Context.Consumer>
            {context => (
                <strong>{context.lastUpdated.toUTCString()}</strong>
            )}
        </Context.Consumer>
    )
}