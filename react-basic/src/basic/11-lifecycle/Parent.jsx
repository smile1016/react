import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
    constructor(){
        super()
        this.state ={
            count:1
        }
    }
    handleClick(){
        this.setState((state)=>{
            return {
                count:state.count+1
            }
        })
    }
    render() {
        console.log('parent render')
        return (
            <div>
                <Child count={this.state.count}></Child>
                <button onClick={this.handleClick.bind(this)}>change</button>
            </div>
        )
    }
    componentDidMount(){
        console.log('parent componentDidMount')
    }
    componentDidUpdate(){
        console.log('parent componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('parent componentWillUnmount')
    }
}
