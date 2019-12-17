import React, { Component } from 'react'
import Product from './Product'
export default class Props extends Component {
    constructor(){
        super()
        this.state = {
            city:['beijing','shanghai']
        }
    }
    render() {
        return (
            <div>
                <Product name={'10'} city={this.state.city}></Product>
            </div>
        )
    }
}
