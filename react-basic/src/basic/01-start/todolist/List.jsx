import React, { Component } from 'react'
import Item from './Item'
export default class List extends Component {
    render() {      
        return (
                <div>
                <ul>
                    {
                        this.props.list.map((item)=>{
                        return <Item del={(id)=>{this.props.del(id)}} key={item.id} item={item}>{item.name}</Item>
                        })
                    }
                </ul>
            </div>
         
        )
    }
}
