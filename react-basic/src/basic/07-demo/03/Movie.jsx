import React, { Component } from 'react'
import Tabbar from './Tabbar'
import styled from 'styled-components'
const TabContainer = styled.div`
    li{
        display:inline-block;
        line-height:35px;
    }
    .active{
        font-size:30px;
        background:pink
    }
`
export default class Movie extends Component {
    constructor(){
        super()
        this.state={
            current:1,
            tsblist:[{id:1,name:'电影'},{id:2,name:'搜索'},{id:3,name:'我的'}]
        }
    }
    handleChange=(id)=>{
        console.log(id)
        this.setState({
            current:id
        })
    }
    render() {
        return (
            <TabContainer>
                <Tabbar change={this.handleChange} list={this.state.tsblist} current={this.state.current}></Tabbar>
            </TabContainer>
        )
    }
}
