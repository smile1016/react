import React, { Component } from 'react'
import { CounterConsumer } from './CounterContext'
export default class Count extends Component {
    render() {
        return (
            <span>
                <CounterConsumer>
                    {
                        (obj)=>{return <span>obj.count</span>}
                    }
                 
                </CounterConsumer>
            </span>
        )
    }
}
