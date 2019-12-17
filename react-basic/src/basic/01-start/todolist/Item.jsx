import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        let {name,id} = this.props.item;
        return (
            <div>
                <li>{name}
                <button>删除</button>
                </li>
            </div>
        )
    }
}
