import {ADD,DEL} from './actionTypes'
const defaultState ={
    //维护默认状态
    list:[{id:1,name:'beijing'},{id:2,name:'shanghai'}]
}

const reducer = (state=defaultState,action)=>{
    switch(action.type){
        case ADD:
            return {
                // 返回新对象
                list:[action.data].concat(state.list)
            }
           
        case DEL:
            return{
                list:state.list.filter((item)=>
                    item.id!==action.id
                )
            }
           
        default:
            return state;
    }
}
export default reducer;