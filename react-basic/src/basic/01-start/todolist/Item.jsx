import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        let {name,id} = this.props.item;
        return (
            <div>
                <li>{name}
                <button onClick={this.props.del.bind(this,id)}>删除</button>
                </li>
            </div>
        )
    }
}
