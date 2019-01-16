import React, { Component } from 'react';
import UserInput from "./UserInput.js"
import RenderScreen from "./RenderScreen.js"
import loremIpsum from "./loremIpsum.js"
import axios from "axios"

class App extends Component {
  constructor(){
    super()
    this.state ={
      userInput: "",
      words: [],
      fonts: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchFonts = this.fetchFonts.bind(this)
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

  async fetchFonts(){
        const res = await axios("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBCnV1KZwuXRwSuucquMMI-52pkQgSCfbE")
        let fonts = res.data.items.map((el) => {
          return {family: el.family, type: el.category}
        })
        this.setState({
          fonts: fonts
        })
  }

  componentDidMount(){
    this.fetchFonts()
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
          words={this.state.words} fonts={this.state.fonts}/>
      </div>
    );
  }
}

export default App;
