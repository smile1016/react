import React, { Component } from 'react'
import GridContainer from './Grid.style'
export default class Grid extends Component {
    state={
        list:[1,2,3,4,5,6,7,8,9,0]
    }
    render() {
        return (
            <GridContainer column={4}>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return (
                                <li key={index} onClick={()=>{this.props.itemClick(item)}}><img src={item.img} alt=""/> <span>{item.title}</span></li>
                            )
                        })
                    }
                   <li>更多</li>
                </ul>
            </GridContainer>
        )
    }
}
