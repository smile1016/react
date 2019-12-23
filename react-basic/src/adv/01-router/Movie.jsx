import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
const HotShowing = () => {
    return <h2>正在热映</h2>
}
const ComingSoon = () => {
    return <h2>即将上演</h2>
}
export default class Movie extends Component {
    render() {
        return (
            <div>
                Movie
                <Link to="/hotshowing">正在热映</Link>|
                <Link to="/comingsoon">即将上演</Link>
                <Switch>
                    <Route path="/hotshowing">
                        <HotShowing></HotShowing>
                    </Route>
                    <Route path="/comingsoon">
                        <ComingSoon></ComingSoon>
                    </Route>
                    <Route path="/">
                        <HotShowing></HotShowing>
                    </Route>
                </Switch>

            </div>
        )
    }
}
