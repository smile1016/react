import React, { Component } from 'react'
import Top10Container from './Top10.style'
export default class Top10 extends Component {
    render() {
        return (
            <Top10Container column={2}>
               <h2>精品好菜</h2>
                <ul>
                    {
                        this.props.list.splice(0,10).map((item,index)=>{
                            return (
                                <li key={index}>
                                    <div className="wrapper">
                                        <img src={item.img} alt=""/> 
                                        <div className='desc'>
                                            <h3>{item.name}</h3>
                                            <span>{item.all_click}浏览&nbsp;&nbsp;{item.favorites}收藏</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
           
            </Top10Container>
        )
    }
}
