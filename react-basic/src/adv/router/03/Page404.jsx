import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class Page404 extends Component {
    render() {
        return (
            <div>
                page404
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}
export default withRouter(Page404)