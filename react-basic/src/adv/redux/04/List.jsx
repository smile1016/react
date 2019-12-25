import React, { Component } from 'react'
import Item from './Item';
import connect from './redux/connect'
class List extends Component {
    render() {      
        return (
                <div>
                <ul>
                    {
                        // this.props.list.map(item=>{
                        //     return <Item key={item.id} item={item}></Item>
                        // })
                        this.props.list.map((item)=>{
                        return <Item key={item.id} item={item}></Item>
                        })
                    }
                </ul>
            </div>
         
        )
    }
    componentDidMount(){
        console.log('list',this.props)
    }
}
export default  connect(List)
