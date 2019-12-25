import React, { Component } from 'react'
import Headerbar from 'components/headerbar/Headerbar'
import {HeaderTab,CategoryContainer} from './Category.style'
import Search from 'components/search/Search'
import {Route,Redirect,withRouter,Switch} from 'react-router-dom'
import Cate from './components/Cate'
import Meterial from './components/Meterial'
import {get} from '../../utils/http'
 class Category extends Component {
    state={
        dir:'left',
        catelist:[],
        materiallist:[]
    }
    handleClick(dir){
        let {path}=this.props.match;
        this.setState((preState)=>{
            return{
                dir:preState.dir ==='left'?'right':'left'
            }
        },()=>{
            if(this.state.dir==='left'){
                this.props.history.push(`${path}/category`)
            }else{
                this.props.history.push(`${path}/meterial`)
            }
        })
    }
    render() {
        let {path} = this.props.match;
        return (
            <CategoryContainer>
           <Headerbar>
                <HeaderTab>
                    <ul className={this.state.dir}>
                    <li className={this.state.dir==='left'?'active':''} onClick={this.handleClick.bind(this)}>分类</li>
                    <li className={this.state.dir==='right'?'active':''} onClick={this.handleClick.bind(this)}>食材</li>
                    </ul>
                    
                </HeaderTab>
            </Headerbar>   
            <Search bgcolor='#F8F3FA' inputbgcolor="#EFEFEF" placeholder='想吃什么搜这么，如：川菜'></Search>
            <Switch>
            <Route path={`${path}/category`} list={this.state.catelist} render={()=>{
                return <Cate list={this.state.catelist}></Cate>
            }}></Route>
            <Route path={`${path}/meterial`} list={this.state.materiallist} render={()=>{
                return <Meterial list={this.state.materiallist}></Meterial>
            }}></Route>
            <Redirect to={`${path}/category`} from ={`${path}`}></Redirect>

            </Switch>
           

            </CategoryContainer>
        )
    }
    async getCategory(){
        let rs = await get('/api/category')
        this.setState({
            catelist:rs.data.data.category,
            materiallist:rs.data.data.material
        })
    }
    componentDidMount(){
        this.getCategory()
    }
}
export default withRouter(Category)