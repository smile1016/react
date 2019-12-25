import React, { Component } from 'react'
import { BrowserRouter as Router,NavLink, Link, Route, Switch, Redirect } from 'react-router-dom'

import Page404 from './Page404'
import Movie from './Movie'

import City from './City'
import './style.css'
const IndexPage = () => {
    return <h1>首页</h1>
}
const CustomLink = ({path})=>{
    return (
        <li>
            <Link to={path}>首页</Link>
        </li>
    )
}
export default class index extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <CustomLink path="/index">首页</CustomLink>
                        <City></City>
                        <NavLink to="/movie" activeClassName="active">电影</NavLink>
                        <Link to="/">我的</Link>
                        <Route path='/setting' children={()=>{
                            return <li>设置</li>
                        }}></Route>
                    </ul>
                </div>
                <Switch>
                    <Route path='/index' children={(props) => {
                        console.log(props)
                        return <IndexPage></IndexPage>
                    }}>


                    </Route>
                    <Route path='/movie' render={() => {
                        return <Movie></Movie>
                    }}>

                    </Route>
                    {/* <Route path='/movie' render={()=>{
                        return  <h1>电影by render</h1>
                    }}>
                        
                    </Route> */}
                    {/* 前面没有匹配成功，或者路径错误时可以匹配 */}
                    <Redirect exact to="/index" from="/">

                    </Redirect>
                    {/* 指定组件的方式 */}
                    <Route render={()=>{
                        return <h1>城市</h1>
                    }}>
                    </Route>
                    {/* <Route component={Page404}>
                    </Route> */}
                    {/* <Route path='*'>
                        <h1>首页</h1>
                    </Route> */}
                </Switch>
            </Router>

        )
    }
}
