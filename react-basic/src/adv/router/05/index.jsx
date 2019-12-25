import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Route,Redirect} from 'react-router-dom'
import Home from './Home'
import Position from './Position'
import Login from './Login'
export default class index extends Component {
    state={
        isLogin:false
    }
    handleLogin=()=>{
        this.setState({
            isLogin:true
        })
    }
    render() {
        return (
            <div>
               <Router>
               <Link to="/home">首页</Link>
                <Link to="/position">职位管理</Link>
                <hr/>
                <Route path="/home">

                </Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/position" 
                    render={()=>{
                        // 权限判断
                        return this.state.isLogin? <Position></Position>:<Login login={this.handleLogin}></Login>
                    }}
                >

                </Route>
                {/* <Route path='/' component={Home}></Route> */}
                {/* 匹配'/' */}
                <Redirect from='/' to='/home'></Redirect>
               </Router>
            </div>
        )
    }
}
