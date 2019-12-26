import React, { Component } from 'react'
import From from './From'
import List from './List'
export default class Todolist extends Component {
    render() {
        return (
            <div>
                <From></From>
                <List></List>
            </div>
        )
    }
}
