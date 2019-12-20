import React, { Component } from 'react'
import WithCopyright from './WithCopyright'
 class Home extends Component {
    render() {
        return (
            <div>
                gp16
                <WithCopyright></WithCopyright>
            </div>
        )
    }
}
export default WithCopyright(Home)
