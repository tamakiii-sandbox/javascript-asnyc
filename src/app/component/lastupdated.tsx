import React from "react"
import { useRootState } from "../context";

export default function Component() {
    const state = useRootState();
    window.console.log(state)

    return (
        <strong>{state.app.lastUpdated.toUTCString()}</strong>
    )
}