import React ,{createContext} from 'react'
const {Provider,Consumer:MapConsumer}=createContext()
class MapProvider extends Component{
    constructor(){
        super();
        this.state={
            showMap:true
        }
    }
    changeStatus=()=>{
        this.setState({
            showMap:this.state.showMap
        })
    }
    render(){
        return(
            <Provider value={{
                showMap:this.state.showMap,
                changeStatus:this.changeStatus
            }
               
            }>
                {this.props.children}
            </Provider>
        )
    }
}
export{
    MapConsumer
}