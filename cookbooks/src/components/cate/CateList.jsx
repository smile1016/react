import React, { Component } from 'react'
import {CateContainer} from './Cate.style.js'
export default class Cate extends Component {
   
    render() {
        let {list,nav,changeNav}=this.props
        let contentList=list[nav] || []
        return (
            <CateContainer>
                <div>
                    <ul>
                        {
                            Object.keys(list).map((item,index)=>{
                                return (
                                    <li 
                                    className={item===nav?'active':''}
                                    key={index} onClick={()=>changeNav(item)}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <ul>
                        {
                            contentList.map((item,index)=>{
                                return(
                                    <li key={index}>{item}</li>
                                )
                            })
                        }
                        
                    </ul>

                </div>
            </CateContainer>
        )
    }
    
}
