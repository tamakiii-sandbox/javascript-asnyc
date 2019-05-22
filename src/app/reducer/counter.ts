import { AnyAction } from "redux";

export interface State {
    count: number
}

type CounterAction = {
    type: 'counter'
    payload: number
}

export const initialState: State = {
    count: 0
}

export type Action = CounterAction

export const reducer = (state: State = initialState, action: Action | AnyAction) => {
    if (action.type === 'counter') {
        if (action.payload == 0) {
            return {...state, count: 0 }
        } else {
            return {...state, count: state.count + action.payload }
        }
    }
    return state
}