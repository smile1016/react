import React, { Component } from 'react'
import MyContext from './MyContext'
import CommonContext from './CommonContext'
import Child from './Child'
export default class Parent extends Component {
    constructor(){
        super()
        this.state={
            name:'xiaoxiao',
            age:18
        }
    }
    render() {
        return (
            <div>
                Parent
                <CommonContext.Provider value={{title:'gp16'}}>
                <MyContext.Provider>
                    <Child></Child>
                </MyContext.Provider>
                </CommonContext.Provider>
                
                
            </div>
        )
    }
}
