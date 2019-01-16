import React, { Component } from "react"
import axios from "axios";


class Letter extends Component{
    constructor(props){
        super(props)
        this.state ={
                backgroundColor: "white",
                padding: "",
                margin: "auto 5px",
                fontSize: "",
                fontStyle: "",
                textTransform: "",
                transform: "",
                display: "inline-block",
                minWidth: "",
        }
    // this.fetchBackgroundColor = this.fetchBackgroundColor.bind(this)
    }

    returnRandomFontSize = () => {
        let n = Math.floor(Math.random()*40) + 20
        return n + "px"
    }
    
    returnRandomFontStyle = () => {
        let array = ["normal", "italic", "bold"];
        return array[Math.floor(Math.random()*3)]
    }

    returnRandomTextTransform = () => {
        let array = ["uppercase","lowercase"]
        return array[Math.floor(Math.random()*2)]
    }

    returnRandomTransform = () => {
        let n = 8 - Math.floor(Math.random()*16)
        return `rotate(${n}deg)`
    }

    returnRandomSpacing = () => {
        let t = Math.floor(Math.random()*15)+5
        let r = Math.floor(Math.random()*15)+5
        let b = Math.floor(Math.random()*15)+5
        let l = Math.floor(Math.random()*15)+5
        return `${t}px, ${r}px, ${b}px, ${l}px`
    }

    // async fetchBackgroundColor(){
    //     const res = await axios("http://colormind.io/api/" + )
    //     this.setState({
    //         backgroundColor: 
    //     })
    //     console.log(res.data.colors[0].rgb.value)
    // }


    componentDidMount(){
        // this.fetchBackgroundColor()
        this.setState({
            fontSize: this.returnRandomFontSize(),
            color: this.props.color,
            fontStyle: this.returnRandomFontStyle(),
            textTransform: this.returnRandomTextTransform(),
            transform: this.returnRandomTransform(),
            padding: this.returnRandomSpacing(),
            minWidth: Math.floor(Math.random()*20)+5 + "px"
        })
    }


    render(){
        return(
            <div style={this.state}>
                {this.props.letter}
            </div>
        )
    }
    
}

export default Letter