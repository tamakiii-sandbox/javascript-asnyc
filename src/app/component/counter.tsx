import React, { useCallback } from "react";
import { useCounterState, useRootDispatch } from "../context/app";

export default function Component() {
    const state = useCounterState();
    const dispatch = useRootDispatch();

    const reset = useCallback(() => dispatch({ type: 'counter', payload: 0 }), [])
    const increment = useCallback(() => dispatch({ type: 'counter', payload: 1 }), [])
    const decrement = useCallback(() => dispatch({ type: 'counter', payload: -1 }), [])

    return (
        <>
            <input type="text" value={state.count} readOnly></input>
            <button onClick={reset}>reset</button>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}