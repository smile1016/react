import React, { Component } from 'react'
import connect  from './redux/connect'
class Item extends Component {
    render() {
        let {name,id} = this.props.item;
        return (
            <li>{name}
                <button onClick={()=>this.props.delItem(id)}>删除</button>
            </li>
           
        )
    }
    componentDidMount(){
        console.log('item',this.props)
    }
}
export default connect(Item)
