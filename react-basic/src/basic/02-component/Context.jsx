import React, { Component } from 'react'
export default class Context extends Component {
    render() {
        return (
            <div>
                context
                {/* Article里的Movie */}
                {this.props.children}
            </div>
        )
    }
}
