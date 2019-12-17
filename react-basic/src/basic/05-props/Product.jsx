import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Product extends Component {
    render() {
        return (
            <div>
                product
                {this.props.name}
            </div>
        )
    }
}
//  属性验证
Product.propTypes = {
    name:PropTypes.string.isrequired,
    city:PropTypes.arrayOf(PropTypes.string)
}
