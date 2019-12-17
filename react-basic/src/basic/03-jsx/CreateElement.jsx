import React, { Component } from 'react'

export default class CreateElement extends Component {
    // 创建元素
    render() {
        return (
            // 参数 ：标签，属性，内容
            React.createElement('h1',{
                className:'title'
            },
            'hello')
        )
    }
}
