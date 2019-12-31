import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import {ListContainer,ListItemsContainer,ItemContainer} from './list.style'
import connect from './redux/connect'

class List extends Component {
    goback=()=>{
        this.props.history.go(-1)
    }
    render() {
        return (
            <ListContainer>
                <NavBar
                    mode="dark"
                    leftContent='返回'
                    onLeftClick={()=>this.goback()}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >
                    <input type="text" placeholder='红烧鱼'/>
                </NavBar>
                <ListItemsContainer>
                    <ul>
                        <ItemContainer>
                            <div><img src="https://i3.meishichina.com/attachment/recipe/2015/09/16/c640_201509161442371783820.jpg?x-oss-process=style/c320" alt=""/></div>
                            <div>
                                <h1>红烧鱼</h1>
                                <p>鱼</p>
                                <p>3245浏览 2444收藏</p>
                            </div>
                        </ItemContainer>
                    </ul>
                </ListItemsContainer>
            </ListContainer>
        )
    }
    componentDidMount(){
        // console.log(this.props)
    }
}
export default connect(List)