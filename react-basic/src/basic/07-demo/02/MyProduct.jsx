import React, { Component } from 'react'
import axios from 'axios'
export default class MyProduct extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(item=>{
                        return <li key={item.id}>{item.name}</li>
                        })
                    }
                    
                </ul>
            </div>
        )
    }
    componentDidMount(){
        // 发起ajax请求
        axios.get('https://api.myjson.com/bins/1h8gwt').then((result)=>{
           
            this.setState({
                list:result.data.products
            })
            console.log(this.state.list)
        })
    }
}
