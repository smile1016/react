import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                Login
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}
