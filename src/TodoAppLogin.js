import React, { Component } from 'react'
import request from 'superagent';

export default class TodoAppLogin extends Component {
    state = {
        emailSignIn: '',
        emailSignUp: '',
        passwordSignIn: '',
        passwordSignUp: '',
    }

    handleSignIn = async () => {
        const signIn = await request.post(`https://cns-todo.herokuapp.com/api/auth/signin`, {
            email: this.state.emailSignIn,
            password: this.state.passwordSignIn,
        })

        localStorage.setItem('user', JSON.stringify(signIn.body));
        this.props.history.push('/')
    }

    handleSignUp = async () => {
        const signUp = await request.post(`https://cns-todo.herokuapp.com/api/auth/signup`, {
            email: this.state.emailSignUp,
            password: this.state.passwordSignUp,
        })

        localStorage.setItem('user', JSON.stringify(signUp.body));
        this.props.history.push('/')
    }

    render() {



        return (
            <div>
                <h3>Sign Up</h3>
                <h4>Enter your email:</h4>
                <input 
                    value={ this.state.emailSignUp } 
                    onChange={(e) => this.setState({ emailSignUp: e.target.value})} />
                <h4>Enter your password:</h4>
                <input 
                    value={ this.state.passwordSignUp } 
                    onChange={(e) => this.setState({ passwordSignUp: e.target.value})} />
                <button onClick={ this.handleSignUp }>Sign up</button>  
                <br/>
                <h3>Sign In</h3>
                <h4>Enter your email:</h4>
                <input 
                    value={ this.state.emailSignIn } 
                    onChange={(e) => this.setState({ emailSignIn: e.target.value})} />
                <h4>Enter your password:</h4>
                <input 
                    value={ this.state.passwordSignIn } 
                    onChange={(e) => this.setState({ passwordSignIn: e.target.value})} />
                <button onClick={this.handleSignIn }>Sign in</button>   
            </div>
        )
    }
}