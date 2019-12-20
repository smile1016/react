import React, { Component } from 'react'
import {HearderBarContainer} from './Headerbar.style'
export default class Headerbar extends Component {
    render() {
        return (
            <HearderBarContainer>
                {this.props.children}
            </HearderBarContainer>
        )
    }
}
