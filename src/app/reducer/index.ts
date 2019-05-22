import * as api from "../api"

export interface State {
    count: number
    posts: api.post.Post[]
    comments: api.comment.Comment[]
    lastUpdated: Date
}

type CounterAction = {
    type: 'counter'
    payload: number
}

type PostAction = {
    type: 'posts'
    payload: api.post.Post[]
}

type CommentAction = {
    type: 'comments'
    payload: api.comment.Comment[]
}
type LastUpdatedAction = {
    type: 'lastUpdated'
    payload: Date
}

export type Action = CounterAction | PostAction | CommentAction | LastUpdatedAction;

export const initialState : State = {
    count: 0,
    posts: [],
    comments: [],
    lastUpdated: new Date,
}

export const reducer = (state: State, action: Action) => {
    if (action.type === 'counter') {
        if (action.payload == 0) {
            return {...state, count: 0 }
        } else {
            return {...state, count: state.count + action.payload }
        }
    }
    if (action.type === 'posts') {
        return {...state, posts: action.payload }
    }
    if (action.type === 'comments') {
        return {...state, comments: action.payload}
    }
    if (action.type === 'lastUpdated') {
        return {...state, lastUpdated: action.payload }
    }
    
    return state
}
