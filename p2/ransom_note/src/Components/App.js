import React, { Component } from 'react';
import UserInput from "./UserInput.js"
import RenderScreen from "./RenderScreen.js"
import loremIpsum from "./loremIpsum.js"

class App extends Component {
  constructor(){
    super()
    this.state ={
      userInput: "",
      words: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidUpdate(){
    if (this.state.userInput === "lorem ipsum") {
      this.setState({
        userInput: loremIpsum
      })
    }
  }
  
  handleSubmit(event){
    event.preventDefault()
    this.setState({
      userInput: "",
      words: this.state.userInput.split(" ")
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
        <RenderScreen 
          words={this.state.words}/>
      </div>
    );
  }
}

export default App;
