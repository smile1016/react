import React, { Component } from 'react'
const Li =(props)=>{
return <li>{props.num}</li>
}
// 显示隐藏
export default class List extends Component {
    constructor(){
        super();
        this.state = {
            list:[1,2,3,4,5,6,7]
        }
        
    }
    
    render() {
       
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (<Li num={item} key={item}></Li>)
                        })
                    
                        
                    }
                </ul>
            </div>
        )
    }
}
