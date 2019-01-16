import React, { Component } from "react"

class Letter extends Component{
    constructor(props){
        super(props)
        this.state ={
                backgroundColor: "white",
                padding: "5px 5px",
                margin: "5px 5px",
                fontSize: "",
                fontStyle: "",
                textTransform: "",
                color: ""
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


    componentDidMount(){
        this.setState({
            fontSize: this.returnRandomFontSize(),
            color: this.returnRandomFontColor(),
            fontStyle: this.returnRandomFontStyle(),
            textTransform: this.returnRandomTextTransform()
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