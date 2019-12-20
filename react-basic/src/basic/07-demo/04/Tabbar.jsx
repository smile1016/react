import React, { Component } from 'react'
import MovieContext from './MovieContext'
export default class Tabbar extends Component {
    static contextType = MovieContext
    render() {
        let {tablist,current,change} = this.context

        console.log(this.context)

        return (
            <ul>
               
                {
                    tablist.map((item)=>{
                        return (
                            <li onClick={change.bind(this,item.id)} className={current === item.id?'active':''} key={item.id}>{item.name}</li>
                        )
                    })
                }
               
            </ul>
        )
    }
}
