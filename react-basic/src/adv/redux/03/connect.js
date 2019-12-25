import {connect} from 'react-redux'
import {increment,decrement} from './actionCreators'
// reducer的状态
const mapState=(state)=>{
    return {
        count:state.count
    }
}
const mapDispatch=(dispatch)=>{
    return{
        increment:(data)=>{
            dispatch(increment(data))
        },
        decrement:()=>{
            dispatch(decrement)
        }
    }
}

export default connect(mapState,mapDispatch)