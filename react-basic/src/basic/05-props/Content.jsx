import React, { Component } from 'react'
import User from './User'
export default class Content extends Component {
    render() {
        return (
            <div>
                <User user={{name:'xixi',age:18}}>
                    welcome
                </User>
            </div>
        )
    }
}
