import React, { Component } from 'react'
import axios from 'axios'

export default class Item extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            isEdit:false
        }
    }
    // 编辑
    handleEdit(index){
        console.log(index)
        this.setState((state)=>{
            return {
                isEdit:!state.isEdit
            }
        })
    }
    // 删除
    handleDel(index){
        console.log(index)
        this.state.list.splice(index, 1)
        this.setState({})
    }
    render() {
        console.log(this.state.list)        
        return (          
            this.state.list.map((item, index) => {
                return (   
                    <tr key={index}>
                        <td ><img src={'https://www.lgstatic.com/' + item.companyLogo} alt="" /></td>
                        <td >{item.positionName}</td>
                        <td >{item.city}</td>
                        <td >{item.salary}</td>
                        <td >{item.companyName}</td>
                        <td >
                            <button onClick={this.handleEdit.bind(this,index)}>编辑</button>
                            <button onClick={this.handleDel.bind(this,index)}>删除</button>
                        </td>
                    </tr>
                    
                )
            })
        )
    }
    componentDidMount() {
        axios.get('./positionlist.json').then(rs => {
            this.setState({
                list: rs.data.result
            })
            console.log(this.state.list)

        })
    }
}
