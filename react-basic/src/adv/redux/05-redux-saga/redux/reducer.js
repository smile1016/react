import {INCREMENT,DECREMNET} from './actiontypes'
//存储数据状态
const countState ={
    count:1
}
const reducer=(state=countState,action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                count:state.count+action.data
            }
            break;
        case DECREMNET:
            return{
                count:state.count-1
            }
            break;
        default:
            return state;
    }
}

export default reducer