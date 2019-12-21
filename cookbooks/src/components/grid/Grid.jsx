import React, { Component } from 'react'
import GridContainer from './Grid.style'
export default class Grid extends Component {
    state={
        list:[1,2,3,4,5,6,7,8,9,0]
    }
    render() {
        return (
            <GridContainer>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li key={index}><img src="" alt=""/> <span>item</span></li>
                            )
                        })
                    }
                   
                </ul>
            </GridContainer>
        )
    }
}
