import * as api from "../api"
import { AnyAction } from "redux";

export interface AppState {
    posts: api.post.Post[]
    comments: api.comment.Comment[]
    lastUpdated: Date
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

export type Action = PostAction | CommentAction | LastUpdatedAction;

export const initialState : AppState = {
    posts: [],
    comments: [],
    lastUpdated: new Date,
}

export const reducer = (state: AppState = initialState, action: Action | AnyAction) => {
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