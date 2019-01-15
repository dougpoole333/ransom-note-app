import React, { Component } from 'react';
import UserInput from "./UserInput.js"

class App extends Component {
  constructor(){
    super()
    this.state ={
      UserInput: ""
    }
  }
  
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
