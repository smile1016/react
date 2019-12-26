import React, { Component } from 'react'
import MyContext from './MyContext'
import CommonContext from './CommonContext'
export default class Grandson extends Component {
    render() {
        return (
            <div>
                Grandson
                {/* <CommonContext.Consumer> */}
                    {/* {
                        ({ title }) => {
                            return (
                                <>
                                <h1>{title}</h1> */}
                                    <MyContext.Consumer>
                                        {
                                            (obj) => {
                                                console.log(obj)
                                            return <h1></h1>
                                            }
                                        }
                                    </MyContext.Consumer>
                                {/* </>

                            )

                        }
                    }

                </CommonContext.Consumer> */}

            </div>
        )
    }
}
