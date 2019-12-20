import React ,{Component} from 'react'
import Home from './Home' 
const WithCopyright= (Comp)=>{
// 高阶组件传的参数是一个组件
    return class App extends Component{
        render(){
            return (
                <>
                <Comp></Comp>
                <h1>版权信息 ©2019</h1> 
                </>
            )
        }
    }
}

export default WithCopyright;