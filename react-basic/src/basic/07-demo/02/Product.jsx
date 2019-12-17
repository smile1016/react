import React, { Component } from 'react'
import axios from 'axios'
export default class Product extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            total: 0
        }
    }
    sum() {
        // 更改state里的total
        let result = this.state.list.reduce((total, item) => {
            return total += parseInt(item.quantity);
        }, 0)
        this.setState({
            total: result
        })
    }
    handleInput(id,e) { 
        // event始终在最后一个参数
        // console.log(e) 
        this.state.list.forEach((item,index)=>{
            if(item.id===id){
                this.state.list[index].quantity = e.target.value
            }
        })
        this.setState({})
        this.sum()
    }
    render() {
        return (
            <div id="app">
                <ul>
                    {
                        this.state.list.map((item) => {
                            return (<li key={item.id}>
                                <input defaultValue={item.quantity}
                                    onInput={this.handleInput.bind(this,item.id)}
                                ></input>
                                {item.name}</li>)
                        })
                    }
                </ul>
                <span>{this.state.total}</span>
            </div>
        )
    }
    componentDidMount() {
        //相当于vue的mounted,此时dom已经挂载，并且是最早发送ajax请求的钩子函数 
        console.log(document.getElementById('app'));
        axios.get('https://api.myjson.com/bins/1h8gwt').then((result) => {
            console.log(result)
            this.setState({
                list: result.data.products
            })
            this.sum()
        })
    }
}
