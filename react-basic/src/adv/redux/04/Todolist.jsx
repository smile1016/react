import React from 'react'
import Form from './Form'
import List from './List'
class Todolist extends React.Component {
    render() {
        return (
            <div>
                <Form></Form>
                <List></List>
            </div>
        )
    }
}
export default Todolist;
