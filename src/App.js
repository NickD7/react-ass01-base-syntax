import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: "Nick",
    message: "I hope I'll be overwritten!"
  };

  changeNameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.username} change={this.changeNameHandler}/>
        <UserOutput username={this.state.username} message={this.state.message}/>
        <UserOutput username={this.state.username} message={this.state.message}/>
        <UserOutput username="John" message={this.state.message}/>
      </div>
    );
  }
}

export default App;
