import {connect} from 'react-redux'

const mapState=(state)=>{
    return {
        dataList:[]
    }
}

const mapDispatch=(dispatch)=>{
    return {
        loadData:(data)=>{
            dispatch({type:'LOAD_LIAT_DATA',data})
        },
        loadMoreData:()=>{

        }
    }
}

export default connect(mapState,mapDispatch)