import {connect} from 'react-redux'
const mapState = (state)=>{
    return{
        showMap:state.index.showMap
    }
}
const mapDispatch =(dispatch)=>{
    return {
        changeMapStatus:()=>{
            dispatch({type:'change_map_value'})
        }
    }
}
export default connect(mapState,mapDispatch) 