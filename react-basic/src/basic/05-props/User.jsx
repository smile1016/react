import React, { Component } from 'react'

export default class User extends Component {
    // static defaultProps = {
    //     user:{
    //         name:'default name',
    //     }
    // }
    render() {
        let user = this.props.user
        return (
            <div>
                {user.name}
                {/* {user.age} */}
                {this.props.children}
            </div>
        )
    }
}
User.defaultProps = {
    user:{
        name:'xiaoxiao'
    }
}
