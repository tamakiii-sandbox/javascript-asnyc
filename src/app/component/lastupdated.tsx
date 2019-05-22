import React, { useContext } from "react"
import { useAppState } from "../context/app";

export default function Component() {
    const state = useAppState();
    window.console.log(context)

    return (
        <strong>{state.lastUpdated.toUTCString()}</strong>
    )
}