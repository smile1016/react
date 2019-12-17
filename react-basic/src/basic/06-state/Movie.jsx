import React, { Component } from 'react'
import HotShowing from './HostShow'
import Commingsoon from './ComingSoon'

export default class Movie extends Component {
    constructor(){
        super()
        this.state ={
            title:'中国机长',
            user:{
                name:'xiaoming',
                age:11
            }
        }
    }
    // state = {
    //     title:'中国机长',
    //     user:{
    //         name:'xiaoming',
    //         age:11
    //     }
    // }
    render() {
        return (
            <div>
                <HotShowing title={this.state.title}></HotShowing>
                <Commingsoon></Commingsoon>

            </div>
        )
    }
    //更改state里数据的第一种方式
    componentDidMount(){
        // 这种方式不好
        // this.state.title = 'hihihi'
        // 可以
        setTimeout(() => {
           this.setState({
               title:'大闹天宫'
           }) 
        }, 5000);

        // 可以生效
        this.state.user.name = 'hihi';
        this.setState({})
    }
}
