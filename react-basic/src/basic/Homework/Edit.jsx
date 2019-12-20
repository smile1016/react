import React, { Component } from 'react'
import ListContext from './ListContext'
export default class Edit extends Component {
    render() {
        return (
            <div className="edit-container" >
                <ListContext.Consumer>
                    {
                        ({isEdit})=>{
                            return (
                                <>
                                    {isEdit}
                                </>
                            )
                        }
                    }
                   
                </ListContext.Consumer>
                职位名称<input type="text" ></input><br/>
                城市<input type="text "></input><br/>
                薪资<input type="text"></input><br/>
                公司名称<input type="text"></input><br/>    
            </div>
        )
    }
}
