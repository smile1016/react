import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super();
        this.state = {
            txt:''
        }
    }
    handleChange(e){
        this.setState({
            txt:e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" onInput={this.handleChange.bind(this)}/>
                <button onClick={()=>this.props.handleAdd(this.state.txt)}>添加</button>
            </div>
        )
    }
}
