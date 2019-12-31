import React, { Component } from 'react'
import HotCateContainer from './HotCate.style'
import Grid from '../../../components/grid/Grid'
import {withRouter} from 'react-router-dom'
class HotCate extends Component {
    itemClick=(item)=>{
        console.log(item,this.props)
        this.props.history.push(`/list/${item.title}`)
    }
    render() {
        return (
            <HotCateContainer>
                <h2>热门分类</h2>
                <Grid list={this.props.list}itemClick={(item)=>this.itemClick(item)}>
                    
                </Grid>
            </HotCateContainer>
        )
    }
}
export default withRouter(HotCate)