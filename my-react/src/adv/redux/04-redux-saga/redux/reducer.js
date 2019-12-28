import {INCREMENT,DECREMENT} from './actionTypes'
const countState = {
    count:1
}


const reducer = (state=countState,action)=>{
    console.log(action.type)
    switch(action.type){
        case INCREMENT:
            return {
                count:state.count+action.data
            }
            
        case DECREMENT:
            return{
                count:state.count-1
            }
        default:
            return state
    }
}
export default reducer