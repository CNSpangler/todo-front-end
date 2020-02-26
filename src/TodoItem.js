import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <li>
                <p>{console.log('this.props item page', this.props)}</p>
                <span>{this.props.todoObject.task}</span>                
            </li>
        )
    }
}
