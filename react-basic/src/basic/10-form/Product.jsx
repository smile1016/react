import React, { Component } from 'react'

export default class Product extends Component {
    state={
        name:''
    }
    handleChange(e){
        // 控制台有输出 ，但是页面没有输出，input受控
        console.log(e.target.value)
        this.setState({
            // name:e.target.value.toUpperCase()
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <div>
                {/* 受控组件 */}
                名称:<input name='name' value = {this.state.name} onChange={this.handleChange.bind(this)} type="text" name="" id=""/>
                描述：<textarea value = {this.state.name} name='desc'></textarea>
                <button>提交</button>
            </div>
        )
    }
}
