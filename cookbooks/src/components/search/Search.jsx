import React, { Component } from 'react'
import {borderContainer,InputContainer,SearchContainer} from './Search.style'
export default class Search extends Component {
    render() {
        let InputWrapper = this.props.hasborder?borderContainer:InputContainer;
        //动态组件
        return (
            <SearchContainer {...this.props}>
                <InputWrapper {...this.props}>
                <i></i>
                <input type="text" placeholder={this.props.placeholder}/>
                </InputWrapper>
            </SearchContainer>
        )
    }
}
