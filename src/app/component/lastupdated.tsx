import React from "react"
import { useRootState } from "../context/app";

export default function Component() {
    const state = useRootState();
    window.console.log(state)

    return (
        <strong>{state.app.lastUpdated.toUTCString()}</strong>
    )
}