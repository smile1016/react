import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch,Redirect } from 'react-router-dom'
const IndexPage = () => {
    return <h1>电影</h1>
}
const Page404 =()=>{
    return <h1>404page</h1>
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
                    <Route path='/index'>
                        <h1>首页</h1>
                    </Route>
                    <Route path='/movie'>
                        <IndexPage></IndexPage>
                    </Route>
                    {/* 前面没有匹配成功，或者路径错误时可以匹配 */}
                    <Redirect exact to="/index" from="/">

                    </Redirect>
                    {/* 指定组件的方式 */}
                    <Route>
                        <Page404></Page404>
                    </Route>
                    <Route component={Page404}>
                    </Route>
                    {/* <Route path='*'>
                        <h1>首页</h1>
                    </Route> */}
                </Switch>
            </Router>

        )
    }
}
