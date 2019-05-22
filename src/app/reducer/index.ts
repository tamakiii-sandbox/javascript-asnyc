import * as api from "../api"

export interface State {
    count: number
    posts: api.post.Post[]
    comments: api.comment.Comment[]
    lastUpdated: Date
}

export type Action =
    | {
        type: 'counter'
        value: number
    } | {
        type: 'posts'
        value: api.post.Post[]
    } | {
        type: 'comments'
        value: api.comment.Comment[]
    } | {
        type: 'lastUpdated'
        value: Date
    }

export const initialState : State = {
    count: 0,
    posts: [],
    comments: [],
    lastUpdated: new Date,
}

export const reducer = (state: State, action: Action) => {
    if (action.type === 'counter') {
        if (action.value == 0) {
            return {...state, count: 0 }
        } else {
            return {...state, count: state.count + action.value }
        }
    }
    if (action.type === 'posts') {
        return {...state, posts: action.value }
    }
    if (action.type === 'comments') {
        return {...state, comments: action.value}
    }
    if (action.type === 'lastUpdated') {
        return {...state, lastUpdated: action.value }
    }
    
    return state
}
