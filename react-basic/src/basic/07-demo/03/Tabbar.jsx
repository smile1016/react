import React, { Component } from 'react'

export default class Tabbar extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.list.map((item)=>{
                        return (
                            <li onClick={this.props.change.bind(this,item.id)} className={this.props.current === item.id?'active':''} key={item.id}>{item.name}</li>
                        )
                    })
                }
               
            </ul>
        )
    }
}
