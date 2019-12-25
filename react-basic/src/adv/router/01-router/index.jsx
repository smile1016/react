import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Theater from './Theater'
import Movie from './Movie'
import Profile from './Profile'
export default class index extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/">电影</Link>|
                    <Link to="/theater/35">电影院</Link>|
                    <Link to="/profile">我的</Link>
                    <hr/>
                    <Switch>
                   
                    <Route path="/theater/:id" component={Theater}></Route>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/"  component={Movie}></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
