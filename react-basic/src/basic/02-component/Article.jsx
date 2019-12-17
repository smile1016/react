import React, { Component } from 'react'
import Title from './Title'
import Context from './Context'
import Movie from './Movie'
export default class Article extends Component {
    render() {
        return (
            <div>
                {/* <Title name="helloworld" time="2019.12.16"/> */}
                <Title name="helloworld" time="2019.12.16">
                    作者：xiaoming
                </Title>
                <Context>
                    <Movie></Movie>
                </Context>
            </div>
        )
    }
}
