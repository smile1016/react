import React, { Component } from 'react'
import connect from './redux/connect'
class Button extends Component {
    handleClick=()=>{
        console.log(this.props)
        //模拟异步

        if(this.props.type === 'increment'){
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
        console.log(this.props)
    }
}
export default connect(Button)
