import React, { Component } from 'react'
import { CnxhContainer } from './cnxh.style'
export default class Cnxh extends Component {
    render() {
        return (
            <CnxhContainer>
                <div className='cnxhTitle'>
                    猜你喜欢
                </div>
                <div className='cnxhMain'>
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <div className="cnxhItem" key={index}>
                                    <img src={item.defaultPic} alt="" />
                                    <div className="info">
                                        <h2>{item.shopName}</h2>
                                        <p>{item.dealGroupTitle}</p>
                                        <div className='price'>
                                            <span>&yen;{item.dealgroupPrice}</span>
                                            <del>&yen;{item.marketPrice}</del>
                                            <h5>{item.salesdesc}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </CnxhContainer>
        )
    }
}
