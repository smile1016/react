import React, { Component } from 'react'
import {CounterWrapper} from './count_style'
import Button from './Button'
import Count from './Count'
export default class Counter extends Component {
    constructor (){
        super();
        this.state = {
            count:0
        }
    }
    handleChange(num){
        console.log(num)
        this.setState({
            count:this.state.count +num
        })
    }
    render() {
        return (
            <CounterWrapper>            
                <Button change={(num)=>this.handleChange(num)} bgcolor="red" type='decrement'>-</Button>
                <Count count = {this.state.count}></Count>
                <Button change={(num)=>this.handleChange(num)}  bgcolor="blue" type="increment">+</Button>
            </CounterWrapper>
        )
    }
}
