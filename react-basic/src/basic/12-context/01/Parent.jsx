import React, { Component } from 'react'
import MyContext from './MyContext'
import CoommonContext from './CommonContext'
import Child from './Child'
export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            name: 'jack'
        }
    }
    render() {
        return (
            <div>
                {/* value设置想要传递的值 */}
                {/* <CoommonContext.Provider> */}
                    <MyContext.Provider value={{ ...this.state }}>

                        <Child></Child>
                    </MyContext.Provider>
                {/* </CoommonContext.Provider> */}

                
            </div>
        )
    }
}
