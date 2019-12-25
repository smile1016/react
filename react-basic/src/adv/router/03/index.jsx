import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch,Redirect } from 'react-router-dom'

import Page404  from './Page404'
import Movie from './Movie'
const IndexPage = () => {
    return <h1>首页</h1>
}

export default class index extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/index">首页</Link>
                    <Link to="/movie">电影</Link>
                    <Link to="/profile">我的</Link>
                </div>
                <Switch>
                    <Route path='/index' children={(props)=>{
                        console.log(props)
                        return <IndexPage></IndexPage>
                    }}>
                    
                       
                    </Route>
                    <Route path='/movie' render={()=>{
                        return  <Movie></Movie>
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
                    <Route>
                        <Page404></Page404>
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
