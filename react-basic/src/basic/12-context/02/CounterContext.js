import React,{createContext,Component} from 'react'
const{Provider,Consumer:CounterConsumer} = createContext();

class CounterProvider extends Component{
    constructor(){
        super();
        this.state = {
            count:1
        }
    }
    render(){
        return (
            <Provider value={{count:this.state.count}}>
            {this.props.children}
        </Provider>
        ) 
        
       
    }
}
export {CounterConsumer,CounterProvider}