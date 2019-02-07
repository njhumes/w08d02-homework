import React, { Component } from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
    }
    loggingIn = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clickedSubmit = () => {
        this.props.updateLogin(this.state.username)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.clickedSubmit}>
                    <input type='text' name='username' onChange={this.loggingIn} placeholder='username'></input>
                    <input type='text' name='password' onChange={this.loggingIn} placeholder='password'></input>
                    <button type='submit'>Login</button>
                </form>
            </div>
            
        )
    }
}

export default Login