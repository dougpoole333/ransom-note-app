import React, { Component } from 'react';
import UserInput from "./UserInput.js"
import RenderScreen from "./RenderScreen.js"

class App extends Component {
  constructor(){
    super()
    this.state ={
      userInput: "",
      letters: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit(event){
    event.preventDefault()
    this.setState({
      letters: [...this.state.userInput]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Ransom Note</h1>
        <UserInput
          onSubmit={this.handleSubmit}
          onChange={this.handleChange} 
          value={this.state.userInput}/>
        <RenderScreen />
      </div>
    );
  }
}

export default App;
