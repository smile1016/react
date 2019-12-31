import React, { Component } from 'react'

import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import '../../assets/style/reset.css'

import Index from '../index/Index'
import Find from '../find/Find'
import Profile from '../profile/Profile'

import IconIndex from '../../assets/images/index.png'
import IconIndexActive from '../../assets/images/index-active.png'
import IconFind from '../../assets/images/find.png'
import IconFindActive from '../../assets/images/find-active.png'
import IconProfile from '../../assets/images/profile.png'
import IconProfileActive from '../../assets/images/profile-active.png'
const tablist = [
    { id: 'index',  title: '首页',icon:IconIndex,iconActive:IconIndexActive, comp: <Index></Index> },
    { id: 'find',  title: '发现',icon:IconFind,iconActive:IconFindActive,  comp: <Find></Find> },
    { id: 'profile', title: '我的',icon:IconProfile,iconActive:IconProfileActive,  comp: <Profile></Profile> }
]
export default class Home extends Component {
    constructor(){
        super();
        this.state={
            selectedTab: 'index',
            hidden: false,
            list: tablist
        }
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                                <TabBar
                                    unselectedTintColor="#949494"
                                    tintColor="#FF6633"
                                    barTintColor="white"
                                    hidden={this.state.hidden}
                                >
                                    {
                                        this.state.list.map((item, index) => {
                                            return (
                                                <TabBar.Item
                                                    title={item.title}
                                                    key={item.id}
                                                    icon={<div style={{
                                                        width: '22px',
                                                        height: '22px',
                                                        background: `url(${item.icon}) center center /  21px 21px no-repeat`
                                                    }}
                                                    />
                                                    }
                                                    selectedIcon={<div style={{
                                                        width: '22px',
                                                        height: '22px',
                                                        background: `url(${item.iconActive}) center center /  21px 21px no-repeat`
                                                    }}
                                                    />
                                                    }
                                                    selected={this.state.selectedTab === item.id}
                                                    onPress={() => {
                                                        this.setState({
                                                            selectedTab: item.id,
                                                        });
                                                    }}
                                                    data-seed="logId"
                                                >
                                                    {item.comp}
                                                </TabBar.Item>
                                            )
                                        })
                                    }
                                </TabBar>
                            </div>
        )
    }
}
