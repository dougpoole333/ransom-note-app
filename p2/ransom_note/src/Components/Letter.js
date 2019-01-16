import React, { Component } from "react"

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
                color: "",
                transform: "",
                display: "inline-block",
                minWidth: "",
        }
    }

    returnRandomColor = () => {
        let r=Math.floor(Math.random()*255)
        let g=Math.floor(Math.random()*255)
        let b=Math.floor(Math.random()*255)
            return `rgb(${r},${g},${b})`
    }

    returnRandomGrayscale = () => {
        let n=Math.floor(Math.random()*255)
            return `rgb(${n},${n},${n})`
    }

    returnRandomFontColor = () => {
        let array = [this.returnRandomColor(), this.returnRandomGrayscale()]
        return array[Math.floor(Math.random()*2)]
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


    componentDidMount(){
        this.setState({
            fontSize: this.returnRandomFontSize(),
            color: this.returnRandomFontColor(),
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