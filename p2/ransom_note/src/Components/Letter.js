import React, { Component } from "react"
import {Helmet} from "react-helmet"


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
                minWidth: "30px",
                fontFamily: "",
        }
    }

    returnRandomFontSize = () => {
        let n = Math.floor(Math.random()*40) + 20
        return n + "px"
    }
    
    returnRandomFontStyle = () => {
        let array = ["normal", "bold"];
        return array[Math.floor(Math.random()*2)]
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

    formatFontForURL = (font) => {
        return font.replace(" ", "+")
    }

    returnRandomColor = () => {
        let r=Math.floor(Math.random()*255)
        let g=Math.floor(Math.random()*255)
        let b=Math.floor(Math.random()*255)
            return [r,g,b]
    }

    returnRandomGrayscale = () => {
        let n=Math.floor(Math.random()*255)
            return [n,n,n]
    }

    returnRandomFontColor = () => {
        let array = [this.returnRandomColor(), this.returnRandomGrayscale()]
        return array[Math.floor(Math.random()*2)]
    }

    returnCompColor = (array) => {
       return array.map(el => (el + 122) % 255)
    }

    formatRGB = (array) => {
        return "rgb(" + array[0] + "," + array[1] + "," + array[2] +")"
    }


    componentDidMount(){
        let fontColor = this.returnRandomFontColor()
        let backgroundColor = this.returnCompColor(fontColor)
        this.setState({
            fontFamily: this.props.font.family,
            fontSize: this.returnRandomFontSize(),
            color: this.formatRGB(fontColor),
            backgroundColor: this.formatRGB(backgroundColor),
            fontStyle: this.returnRandomFontStyle(),
            textTransform: this.returnRandomTextTransform(),
            transform: this.returnRandomTransform(),
            padding: this.returnRandomSpacing(),
            minWidth: Math.floor(Math.random()*20)+5 + "px"
        })
    }


    render(){
        return(
            <div>
                <Helmet>
                    <link rel="stylesheet" href={"https://fonts.googleapis.com/css?family="+this.formatFontForURL(this.state.fontFamily)} />  
                </Helmet>
                <div style={this.state}>
                    {this.props.letter ? this.props.letter : null}
                </div>
            </div>
            
        )
    }
    
}

export default Letter