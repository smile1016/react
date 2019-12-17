import React, { Component } from 'react'

export default class Event extends Component {
    constructor(){
        super();
        // 第三种方式，官网推荐使用
        this.handleClick = this.handleClick.bind(this)
    }
    state = {
        count: 1,
        name: 'xiaoxiao'
    }
    handleClick(arg1){
        console.log(arg1)
        console.log(this.state.name)
        this.setState({
            count: this.state.count + 1
        })
    }

    handleInput(e){
        console.log(e.target.value)
        this.setState({
            name:e.target.value
        })
    }
    // 第二种方式：写成箭头函数
    // handleClick=()=> {
    //     console.log(this.state.name)
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }
    go(event){
        console.log(event)
        //阻止事件的默认行为
        event.preventDefault()
    }
    render() {
        console.log('render')
        return (
            <div>
                <a href="https://www.baidu.com" onClick={this.go}>link</a>
                {this.state.count}
                <hr/>
                {/* 模拟双向绑定,使用defaultValue */}
                <input type="text" defaultValue={this.state.name} onInput={this.handleInput.bind(this)} />
                <span>{this.state.name}</span>

                {/* 第一种方式：不推荐使用，有性能问题,可以传参 */}
                {/* <button onClick={this.handleClick.bind(this)}>添加</button> */}
                <button onClick={()=>this.handleClick('abc')}>添加</button>
            </div>
        )
    }
}
