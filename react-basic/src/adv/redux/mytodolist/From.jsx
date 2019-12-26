import React, { Component } from 'react'
import connect from './redux/connect'
class From extends Component {
    constructor(){
        super();
        this.state={
            txt:''
        }
    }
    handleChange(e){
        this.setState({
            txt:e.target.value
        })
    }
    handleClick(){
        let txt= this.state.txt;
        let id = parseInt(Math.random()*10000)
        //使用redux
        this.props.addItem({id,name:txt})
    }
    render() {
        return (
            <div>
                <input type="text" onInput={this.handleChange.bind(this)}/>
                <button onClick={this.handleClick.bind(this)}> 添加</button>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}
export default connect(From)
