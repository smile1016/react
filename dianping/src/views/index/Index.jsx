import React, { Component } from 'react'
import { Carousel, NavBar, Icon } from 'antd-mobile';
import { NavbarContainer, CarouselContainer } from './Index.style'
import { BordContainer } from '../../components/Bord.style'
import { get } from '../../utils/http'
import Rb from './components/rb/Rb'
import Chth from './components/czth/Czth'
import Cnxh from './components/cnxh/Cnxh'

import Find from '../find/Find'
export default class index extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            slideDate: [{ icon: '1', title: '美食' }, { icon: '1', title: '猫眼电影' }, { icon: '1', title: '酒店' }, { icon: '1', title: '休闲娱乐' }, { icon: '1', title: '外卖' }, { icon: '1', title: '火锅' }, { icon: '1', title: '丽人' }, { icon: '1', title: '购物' }, { icon: '1', title: '周边游' }, { icon: '1', title: 'KTV' },],
            imgHeight: 176,
            moduleInfoList: [],
            rbList: [],
            czthList:[],
            cnxhList:[]
        }
    }

    async getData() {
        let rs = await get('api/index')
        this.setState({
            rbList: rs.data.data.moduleInfoList[0].moduleData.data.list,
            czthList:rs.data.data.moduleInfoList[1].moduleData.data.preferenceValueHuiVos,
            cnxhList:rs.data.data.moduleInfoList[3].moduleData.data.guessYouVoList
        })
        console.log(this.state.cnxhList)
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['1', '2', '3']
            });
        }, 100);
        this.getData()

    }
    render() {
        return (
            <div>
                <NavbarContainer>
                    <NavBar
                        mode="dark"
                        leftContent='北京'
                        onLeftClick={() => this.goback()}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                        ]}
                    >
                        <input type="text" placeholder='输入商户名、地点' />
                    </NavBar>
                </NavbarContainer>
                <CarouselContainer>
                    <Carousel
                        autoplay={false}
                        infinite
                    >
                        {this.state.data.map((item, index) => (
                            <div key={index} style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
                                <ul>
                                    {
                                        this.state.slideDate.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <div>
                                                        <img src="data:image/png;base64,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" alt="" />
                                                    </div>
                                                    <span>{item.title}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                            </div>
                        ))}

                    </Carousel>
                </CarouselContainer>
                <BordContainer></BordContainer>
                
                <Rb list={this.state.rbList}></Rb>
                <BordContainer></BordContainer>
                {/* 超值特惠 */}
                <Chth list={this.state.czthList}></Chth>
                <BordContainer></BordContainer>
                {/* 猜你喜欢 */}
                <Cnxh list={this.state.cnxhList}></Cnxh>
            </div>
        )
    }
}
