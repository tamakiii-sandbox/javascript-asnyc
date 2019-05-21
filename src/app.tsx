import React from "react"
import PostPost from "./app/component/form/post"
import PostComment from "./app/component/form/comment"
import Post from "./app/component/post"
import LastUpdated from "./app/component/lastupdated"

export interface Context {
    lastUpdated: Date
    setLastUpdated: Function
}

interface Props {
    //
}

interface State {
    lastUpdated: Date,
    setLastUpdated: Function,
}

const initialValue = {
    lastUpdated: new Date,
    setLastUpdated: () => {}
}

export const AppContext = React.createContext<Context>(initialValue);

export default class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            lastUpdated: new Date,
            setLastUpdated: this.setLastUpdated
        };
    }

    setLastUpdated = (lastUpdated: Date) => {
        this.setState({ lastUpdated })
    }

    render() {
        return (
            // TODO: ErrorBounday
            <AppContext.Provider value={this.state}>
                <h1>Hello</h1>
                <Post lastUpdated={this.state.lastUpdated}></Post>
                <PostPost></PostPost>
                <PostComment></PostComment>
                <div>
                    <LastUpdated></LastUpdated>
                </div>
            </AppContext.Provider>
        )
    }
}