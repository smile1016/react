import React, { Component } from 'react'
import Item from './Item'
import Edit from './Edit'
import { Container } from './List_style'
import ListContext from './ListContext'
export default class Index extends Component {
    constructor(){
        super()
        this.state={
            isEdit:false
        }
    }
    render() {
        return (
            <Container>
                <table>
                    <tbody>
                        <tr>
                            <th>公司logo</th>
                            <th>职位名称</th>
                            <th>城市</th>
                            <th>薪资</th>
                            <th>公司名称</th>
                            <th>操作</th>
                        </tr>
                        <Item></Item>
                        
                        {/* <Item list={this.state.list}></Item> */}
                    </tbody>
                </table>
                <ListContext.Provider value={{isEdit:this.state.isEdit}}>
                <Edit></Edit>
                </ListContext.Provider>
               
            </Container>
        )
    }
}
