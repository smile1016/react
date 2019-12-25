import React, { Component } from 'react'
import {Switch } from 'antd-mobile';
import connect from './redux/connect'
class More extends Component {
    
    render() {
        return (
            <div>
              more
              <Switch checked={this.props.showMap} 
              onChange={this.props.changeMapStatus}>
                
              </Switch>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}
export default connect(More)
