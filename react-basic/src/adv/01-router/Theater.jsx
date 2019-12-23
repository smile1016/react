import React, { Component } from 'react'
// import {withRouter,useParams} from 'react-router-dom'
 class Theater extends Component {
    render() {
        return (
            <div>
                theater
            </div>
        )
    }
    componentDidMount(){
        // let result = useParams()
        console.log(this.props)
    }
}
export default Theater
