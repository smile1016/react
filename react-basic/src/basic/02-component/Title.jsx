import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        let {name,time} = this.props
        return (
            <div>
                <h1>{name}</h1>
                <h2>{time}</h2>
                <hr/>
                {/* 相当于插槽 */}
                {this.props.children}
            </div>
        )
    }
}
