import React from "react"
import { AppContext } from "../../app"

export default function Component() {
    return (
        <AppContext.Consumer>
            {context => (
                <strong>{context.lastUpdated.toUTCString()}</strong>
            )}
        </AppContext.Consumer>
    )
}