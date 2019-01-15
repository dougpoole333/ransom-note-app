import React, { Component } from 'react';
import UserInput from "./UserInput.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ransom Note</h1>
        <UserInput />
      </div>
    );
  }
}

export default App;
