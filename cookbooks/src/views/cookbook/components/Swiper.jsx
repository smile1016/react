import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
export default class Swiper extends Component {
    render() {
        return (            
                 <Carousel
                    autoplay={false}
                    infinite
                >
                    {this.props.list.map(item => (
                        
                            <img key={item.id}
                                src={item.url}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                    ))}
                </Carousel>
            
        )
    }
}
