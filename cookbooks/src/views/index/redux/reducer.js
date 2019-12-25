const defaultState={
    showMap:true
}
const reducer =(state=defaultState,action)=>{
    switch (action.type){
        case 'change_map_value':
            localStorage.setItem('showMap',!state.showMap)
            return{
                showMap:!state.showMap
            }
            break
        default:
            return {
                showMap:localStorage.getItem('showMap')||state.showMap
            };
    }
}
export default reducer