import {
    INCREMENT,
    DECREMENT
} from './actionTypes'
// 如果这里变成函数 需要 使用中间件
const increment = (data) => {
    return (dispatch)=>{
        console.log(dispatch)
        setTimeout(() => {
            dispatch({
                type: INCREMENT,
                data
            })
        }, 2000);
       
    }
}

const decrement = () => {
    return {
        type: DECREMENT
    }
}
export {
    increment,
    decrement
}