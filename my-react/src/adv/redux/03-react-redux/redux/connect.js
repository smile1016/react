import {connect} from 'react-redux'
import {decrement,increment} from './actionCreators'
const MapState=(state)=>{
    return {
        count:state.count
    }
}

const MapDispatch  =(dispatch)=>{
    return {
        increment:(data)=>{
            // setTimeout(() => {
                dispatch(increment(data))
            // }, 2000);
           
        },
        decrement:()=>{
            dispatch(decrement)
        }
    }
}

export default connect(MapState,MapDispatch)