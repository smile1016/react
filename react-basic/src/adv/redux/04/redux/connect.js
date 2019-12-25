import {connect} from 'react-redux'
import {add_item,del_item} from './actionCreators'
// 必须写
const mapState=(state)=>{
    // 取数据状态
    return {
        list:state.list
    }
}
const mapDispatch=(dispatch)=>{
    //派发事件
    return{
        addItem:(data)=>{
            dispatch(add_item(data))
        },
        delItem:(id)=>{
            dispatch(del_item(id))
        }

    }
}
export default connect(mapState,mapDispatch)