import React, { Component } from 'react'
//类组件 

const Comps = {
    compa(){
        return <h1>comp-a</h1>
    },
    compb(){
        return <h1>comp-b</h1>
    }
}
export default class Movie extends Component {
    render() {
        // 动态判断
        let Comp = true?Comps.compa:Comps.compb
        return (
            <div>
                movie
                {this.props.children}
                <Comp></Comp>
            </div>

        )
    }
}
