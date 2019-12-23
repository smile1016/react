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
            swiperData: [],
            hotcateData:[],
            listData:[]
          }
    }
    render() {
        return (
            <div>
                <Headerbar>菜谱大全</Headerbar>
               <Swiper list = {this.state.swiperData}></Swiper>
                {/* hasborder,bgcolor,placeholder都是动态传值 */}
                <Search hasborder={true} bgcolor='#f8f3fa' placeholder="想吃什么搜这里，如：川菜"></Search>
                <HotCate list={this.state.hotcateData}></HotCate>
                <Top10 list={this.state.listData}></Top10>
            </div>
        )
    }
    // 从后台获取swiper
    async getSwiper(){
        let rs = await get('/api/swiper');
        this.setState({
            swiperData:rs.data.data
        })
        // console.log(this.state.swiperData)
    }
    // 从后台获取热门分类
    async getHotCate(){
        let rs = await get('/api/hotcate');
        this.setState({
            hotcateData:rs.data.list
        })
        // console.log(this.state.hotcateData)
    }
    // 从后台获取top10列表 
    async getList(){
        let rs = await get('/api/list');
        // console.log(rs)
        this.setState({
            listData:rs.data.data
        })
        // console.log(this.state.listData)
    }
    async componentDidMount(){
        //请求数据
        this.getSwiper();
        this.getHotCate();
        this.getList();
    }
}
