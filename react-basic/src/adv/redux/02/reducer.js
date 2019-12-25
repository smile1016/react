const countState={
    count:1
}
const reducer=(state=countState,action)=>{
    switch(action.type){
        case "increment":
        return{
            count:state.count+1
        }
        break;
        default:
            return state;
    }
}
module.exports=reducer;