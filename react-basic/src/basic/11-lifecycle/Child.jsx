import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
export default class Child extends Component {
    constructor(){
        super();
        this.state={
            name:'xiaxia'
        }
    }
    render() {
        console.log('child render')
        return (
            <div>
                {this.props.count}
            </div>
        )
    }
    static getDerivedStateFromProps(props,state){
        // 必须返回对象，作为state的一部分
        return {
            name:'jack'
        }
    }
    componentDidMount(){
        console.log('child componentDidMount')
        // setTimeout(() => {
        //     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
        // }, 5000);
    }
    componentDidUpdate(){
        console.log('child componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('child componentWillUnmount')
    }
}
