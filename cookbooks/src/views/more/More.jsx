import React, { Component } from 'react'
import {Switch } from 'antd-mobile';
import {MapConsumer} from '../../context/mapContext'
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
            <MapConsumer>
                {
                    ({showMap,changeStatus})=>{
                        return (
                            <div>
                            more
                            <Switch checked={showMap} onChange={changeStatus}>
                              
                            </Switch>
                          </div>
                        )
                    }
                }
            </MapConsumer>
           
        )
    }
}
