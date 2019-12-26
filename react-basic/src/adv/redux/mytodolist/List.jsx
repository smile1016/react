import React, { Component } from 'react'
import connect from './redux/connect'
import Item from './Item'
class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                        return <Item key={index} item={item}></Item>
                        })
                    }
                </ul>
                
            </div>
        )
    }
}
export default connect(List)