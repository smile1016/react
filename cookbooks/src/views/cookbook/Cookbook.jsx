import React, { Component } from 'react'
import Headerbar from 'components/headerbar/Headerbar'
import Search from 'components/search/Search'
import Swiper from './components/Swiper'
import HotCate from './components/HotCate'
import Top10 from './components/Top10'
import {get} from 'utils/http.js'

export default class Cookbook extends Component {
    constructor(){
        super();
        this.state = {
            data: []
          }
    }
    render() {
        return (
            <div>
                <Headerbar>菜谱大全</Headerbar>
               <Swiper list = {this.state.data}></Swiper>
                {/* hasborder,bgcolor,placeholder都是动态传值 */}
                <Search hasborder={true} bgcolor='#f8f3fa' placeholder="想吃什么搜这里，如：川菜"></Search>
                <HotCate></HotCate>
                <Top10></Top10>
            </div>
        )
    }
    async componentDidMount(){
        //请求数据
        let result =await get('/api/swiper')
        this.setState({
            data:result.data.data
        })
        console.log(result)
    }
}
