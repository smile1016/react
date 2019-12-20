import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import 'assets/style/reset.css'
import 'antd-mobile/dist/antd-mobile.css';

import Cookbook from '../cookbook/Cookbook'


import IconCookbook from 'assets/images/cookbook.png'
import IconCookbookActive from 'assets/images/cookbook-active.png'
import Iconcategory from 'assets/images/menu.png'
import IconcategoryActive from 'assets/images/menu-active.png'
import IconMore from 'assets/images/more.png'
import IconMoreActive from 'assets/images/more-active.png'
const tablist = [
    { id: 'cookbook', icon: IconCookbook, iconActive: IconCookbookActive, title: '菜谱大全' ,comp:<Cookbook></Cookbook>},
    { id: 'category', icon: Iconcategory, iconActive: IconcategoryActive, title: '分类' },
    { id: 'more', icon: IconMore, iconActive: IconMoreActive, title: '更多' }
]
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //默认选中
            selectedTab: 'cookbook',
            hidden: false,
            list: tablist
        };
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
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
        );
    }
}
