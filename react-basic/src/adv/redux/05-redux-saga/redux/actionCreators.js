import {INCREMENT,DECREMNET} from './actiontypes'

const increment=(data)=>{
    // 函数必须返回扁平
    return(dispatch)=>{
        setTimeout(() => {
            dispatch({
                type:INCREMENT,
                data
            })
        }, 2000);
    }
    
   
}
const decrement={
    // 函数必须返回扁平
   
        type:DECREMNET
    
}
export {
    increment,
    decrement
}