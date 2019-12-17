import React, { Component } from 'react'

const Login = (props)=>{
return <h1>{props.username}</h1>
}

const Sigin = ()=>{
    return <span>注册</span>
}

// 显示隐藏
export default class Shou extends Component {
    constructor(){
        super();
        this.state = {
            isshow:true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            isshow:!this.state.isshow
        })
    }
    render() {
        console.log('hello')
        let isLogin = true;
        return (
            <div>
                {/* 判断是否登录 */}
                {
                    isLogin ? <Login username="admin"></Login>:<Sigin></Sigin>
                }



                {/* {
                    this.state.isshow && <h1>gp16</h1>
                }
                <button onClick={this.handleClick}>显示/隐藏</button> */}
            </div>
        )
    }
}
