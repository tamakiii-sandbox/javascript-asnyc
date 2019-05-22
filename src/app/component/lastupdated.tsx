import React from "react"
import { useAppState } from "../context/app";

export default function Component() {
    const state = useAppState();
    window.console.log(state)

    return (
        <strong>{state.app.lastUpdated.toUTCString()}</strong>
    )
}