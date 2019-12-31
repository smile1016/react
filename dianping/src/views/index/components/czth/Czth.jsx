import React, { Component } from 'react'
import { CzthContainer } from './Czth.style'
export default class Czth extends Component {
    render() {
        return (
            <CzthContainer>
                <div className='czthTop'>
                    <h2>超值特惠</h2>
                    <a href="#">更多优惠></a>
                </div>
                <div className='czthMain'>
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img src={item.imageUrl} alt="" />
                                    <p>{item.shortTitle}</p>
                            <span>&yen;{item.price}</span>
                        <del>&yen;{item.markPrice}</del>
                                </div>
                            )
                        })
                    }
                </div>

            </CzthContainer>
        )
    }
}
