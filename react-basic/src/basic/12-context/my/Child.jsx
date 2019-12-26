import React, { Component } from 'react'
import Grandson from './Grandson' 
export default class Child extends Component {
    render() {
        return (
            <div>
                Child
                <Grandson></Grandson>
            </div>
        )
    }
}
