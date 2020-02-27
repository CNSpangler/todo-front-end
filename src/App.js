import React, { Component } from 'react'
import './App.css';
import { 
  Route, 
  // Link,
  Switch,
  Redirect,
  BrowserRouter as Router, 
} from 'react-router-dom';
import TodoApp from './TodoApp.js';
import TodoAppLogin from './TodoAppLogin.js';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <h1>Here's what you have to do:</h1>
            <Route path='/' render={() => 
              isLoggedIn()
                ? <TodoApp />
                : <Redirect to='login' />
            } />
            <Route path='/login' component={TodoAppLogin} />

            {/* <Route exact path="/" component={TodoAppLogin} /> */}
            {/* <Route exact path="/todos" component={TodoApp} /> */}
          </div>
        </Switch>
      </Router>
    )
  }
}