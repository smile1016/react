import {connect} from 'react-redux'
const mapState = (state)=>{
    return{
        showMap:state.index.showMap
    }
}

export default connect(mapState) 