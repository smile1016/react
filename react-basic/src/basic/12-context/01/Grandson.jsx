import React, { Component } from 'react'
import MyContext from './MyContext'
import CoommonContext from './CommonContext'

export default class Grandson extends Component {
    //static contextType不能改
    // static contextType = MyContext;
    render() {
        console.log(this.context)
        return (
            <div>
                <MyContext.Consumer>
                    {
                        // ()=>{ return this.context.name}
                        ()=>{ return <h1>hello</h1>}
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}
