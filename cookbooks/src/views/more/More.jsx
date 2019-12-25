import React, { Component } from 'react'
import {Switch } from 'antd-mobile';
export default class More extends Component {
    state={
        showMap:true
    }
    handleChange=()=>{
        this.setState({
            showMap:!this.state.showMap
        })
    }
    render() {
        return (
            <div>
              more
              <Switch checked={this.state.showMap} onChange={this.handleChange}>
                
              </Switch>
            </div>
        )
    }
}
