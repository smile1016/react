import React, { Component } from 'react'
import Headerbar from 'components/headerbar/Headerbar'
import {HeaderTab} from './Category.style'
import Search from 'components/search/Search'
export default class Category extends Component {
    state={
        dir:'left'
    }
    handleClick(){
        this.setState({
            dir:this.state.dir ==='left'?'right':'left'
        })
    }
    render() {
        return (
            <div>
           <Headerbar>
                <HeaderTab>
                    <ul className={this.state.dir}>
                    <li className={this.state.dir==='left'?'active':''} onClick={this.handleClick.bind(this)}>分类</li>
                    <li className={this.state.dir==='right'?'active':''} onClick={this.handleClick.bind(this)}>食材</li>
                    </ul>
                    
                </HeaderTab>
            </Headerbar>   
            <Search bgcolor='#F8F3FA' inputbgcolor="#EFEFEF" placeholder='想吃什么搜这么，如：川菜'></Search>


            </div>
        )
    }
}
