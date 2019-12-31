import React, { Component } from 'react'
import {RbContainer} from './rb.style'
export default class rb extends Component {
    render() {
        return (  
            <RbContainer>
                {
                        this.props.list.map((item, index) => {
                            return (
                                <a key={index}>
                                    <div className='left'>
                                        <h2>{item.adTitle}</h2>
                                        <p>{item.adSubTitle}</p>
                                    </div>
                                    <div className='right'>
                                        <img src={item.thumb} alt="" />

                                    </div>
                                </a>
                            )
                        })
                    }
            </RbContainer>
        )
    }
}
