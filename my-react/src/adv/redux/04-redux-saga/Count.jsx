import React, { Component } from 'react'
import Button from './Button'
import connect from './redux/connect'
 class Count extends Component {
    render() {
        return (
            <div>
                <Button type='decrement'>-</Button>
                {this.props.count}
                <Button type="increment">+</Button>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}
export default connect(Count)