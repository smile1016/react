import React, { Component } from 'react'

export default class Clock extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
        // 首次加载时执行，只执行一次
        console.log('constructor')
    }

    render() {
        console.log('render')
        // 只要数据有变化，就会更新render函数
        // 改变父组件属性值，改变状态，强制更新
        return (
            <div>
                <h1>time is :{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                date:new Date()
            })
        }, 1000);
        
    }
}
