import React, { Component } from 'react'

import CateList from '../../../components/cate/CateList'
export default class Meterial extends Component {
    state={
        nav:'肉类'
    }
    handleClick=(item)=>{
        this.setState({
            nav:item
        })
    }
    render() {
        let contenList=this.props.list[this.state.nav] || []
            return(
                <CateList list={this.props.list} nav={this.state.nav}
                changeNav={this.handleClick}
                ></CateList>
            )
        
    }
}
