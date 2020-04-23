import React, { Component } from 'react'
import request from 'superagent';
import TodoItem from './TodoItem.js';

export default class TodoApp extends Component {
    state = { todosArray: [] };
    
    componentDidMount = async() => {
        console.log('here');
        
        const user = JSON.parse(localStorage.getItem('user'));
        const todosData = await request.get(`https://cns-todo.herokuapp.com/api/todos`)
        .set('Authorization', user.token);
        
        console.log(todosData.body)
        this.setState({ todosArray: todosData.body })
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
