import React, { Component } from 'react'
import Headerbar from 'components/headerbar/Headerbar'
import Search from 'components/search/Search'
import { Carousel } from 'antd-mobile'
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
                <Carousel
                    autoplay={false}
                    infinite
                >
                    {this.state.data.map(item => (
                        
                            <img key={item.id}
                                src={item.url}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                    ))}
                </Carousel>
                {/* hasborder,bgcolor,placeholder都是动态传值 */}
                <Search hasborder={true} bgcolor='#f8f3ffa' placeholder="想吃什么搜这里，如：川菜"></Search>
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
