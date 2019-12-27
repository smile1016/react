import React, { Component } from 'react'
import connect from './redux/connect'
 class Button extends Component {
    handleClick=()=>{
        console.log(this.props.type)
        if(this.props.type==='increment'){
            //异步数据操作
            // setTimeout(() => {
                this.props.increment(2)
            // }, 2000);    
        }else{
            this.props.decrement()
        }
    }
    render() {
        return (
            <button onClick={this.handleClick}>{this.props.children}</button>
        )
    }
    componentDidMount(){
        console.log('button',this.props)
    }
}
export default connect(Button)
