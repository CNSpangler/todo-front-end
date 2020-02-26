import React, { Component } from 'react'
import './App.css';
import { 
  Route, 
  Link,
  // Switch,
  BrowserRouter as Router, 
} from 'react-router-dom';
import TodoApp from './TodoApp.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        {/* <Switch> */}
          <div>
            <h1>Here's what you have to do:</h1>
            <Link to="/">Home</Link>
            <Route exact path="/" component={TodoApp} />
          </div>
        {/* </Switch> */}
      </Router>
    )
  }
}