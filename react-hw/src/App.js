import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import MainContainer from './MainContainer/MainContainer';


class App extends Component {
  constructor(){
    super();
    this.state = {
      logged: false,
      username: '',
    }
  }
  updateLogin = (username) => {
    this.setState({
      logged: true,
      username: username
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        {this.state.logged ? <MainContainer username={this.state.username} /> : <Login updateLogin={this.updateLogin}/>}
      </div>
    );
  }
}

export default App;
