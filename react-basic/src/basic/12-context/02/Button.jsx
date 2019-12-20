import React, { Component } from 'react'

export default class Button extends Component {
    handleClick(){
        let type = this.props.type;
        if(type==='increment'){
            console.log(1)
            this.props.change(1)
        }else{
            console.log(2)
            this.props.change(-2)
        }

    }
    render() {
        return (
            <button onClick={()=>{this.handleClick()}} style={{background:this.props.bgcolor}}>{this.props.children}</button>
        )
    }
}
