import React, { Component } from 'react'
import request from 'superagent';
import TodoItem from './TodoItem.js';

export default class TodoApp extends Component {
    state = { todosArray: [] };
    
    componentDidMount = async() => {
        const URL = 'https://cns-todo.herokuapp.com/api/todos';
        const todosData = await request.get(URL);
        console.log(todosData);
        this.setState({ todosArray: todosData.body});
    };

    render() {    
        return (
            <ul>
                { 
                    this.state.todosArray.map(todoObject => {
                        return <TodoItem todoObject={todoObject} key={todoObject.id} />
                    })
                }
            </ul>
        )
    }
}
