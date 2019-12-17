import React from 'react'
import Form from './Form'
import List from './List'
class Todolist extends React.Component {
    constructor(){
        super();
        this.state = {
            list:[{id:1,name:'beijing'},{id:2,name:'shanghai'}]
        }
    }
    handleAdd(txt){
        console.log(txt)
        this.state.list.push(txt);
        this.setState({})
    }
    render() {
        return (
            <div>
                <Form handleAdd={this.handleAdd.bind(this)}></Form>
                <List list={this.state.list}></List>
            </div>
        )
    }
}
export default Todolist;
