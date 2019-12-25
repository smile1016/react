import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class City extends Component {
    handleClick=()=>{
        console.log(this.props)
        this.props.history.push('/city')
    }
    render() {
        return (
            <div>
                <li onClick={this.handleClick}>城市</li>
            </div>
        )
    }
    componentDidMount(props){
        
    }
}
export default withRouter(City)
