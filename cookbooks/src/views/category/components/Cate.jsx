import React, { Component } from 'react'

import CateList from '../../../components/cate/CateList'
export default class Cate extends Component {
    state={
        nav:'热门'
    }
    handleClick=(item)=>{
        this.setState({
            nav:item
        })
    }
    render() {
        let contentList=this.props.list[this.state.nav] || []
            return(
                <CateList list={this.props.list} nav={this.state.nav}
                changeNav={this.handleClick}
                ></CateList>
            )
        
    }
    
}
