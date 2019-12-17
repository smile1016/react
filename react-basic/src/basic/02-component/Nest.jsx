import React, { Component } from 'react';
import Movie from './Movie'
export default class Nest extends Component {
    render() {
        return (
            <div>
                <Movie>
                    正在热映
                </Movie>
                <Movie></Movie>
            </div>
        )
    }
}
