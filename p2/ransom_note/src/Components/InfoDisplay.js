import React, { Component } from "react"

class InfoDisplay extends Component{
    constructor(props){
        super()
        this.state = {
            open: false,
            fontFamily: "",
            color: "",
            backgroundColor: "",
            fontType: "",
            
        }
    }
    toggleDisplayOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }

    parseDisplayString = (string) => {
       let split = string.split(",")
       let merge = [split[0], split[1]+ "," + split[2]+","+split[3], split[4]+ "," + split[5]+","+split[6], split[7]]
       return merge
    }

    componentWillReceiveProps(next){
        if(next.display){
            let array=this.parseDisplayString(next.display)
            this.setState({
                fontFamily: array[0],
                color: array[1],
                backgroundColor: array[2],
                fontType: array[3]
            })
        }
    }
    formatFontForURL = (font) => {
        return font.replace(/ /g,"+")
    }

    codeDisplay = () => {
        if(this.state.fontFamily){
            return(
                <div className="code">
                    font-family: "{this.state.fontFamily}", {this.state.fontType};<br />                              
                    color: {this.state.color}<br/>
                    background-color: {this.state.backgroundColor};
                </div>
            )
        } else {
            return(
                <div className="code">Enter text and click a letter to view CSS styling</div>
            ) 
        }
    }
    headDisplay = () => {
        let linkText= `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=` + this.formatFontForURL(this.state.fontFamily) + `">`
        if(this.state.fontFamily){
            return(
                <div className="head-link">
                    {linkText}
                </div>   
            )
        } else {
            return(
                <div className="head-link">Enter text and click a letter to view HTML head link tag</div>   
            ) 
        }
    }


    render(){
        let textStyle={
            "fontFamily": this.state.fontFamily,
            "color": this.state.color,
            "backgroundColor": this.state.backgroundColor,
            "fontSize": "30px"
        }
        return(
            <div
                className="info-display"
                style={this.state.open ? {bottom: "0"} : {bottom: "-200px"}}>
                <h1 
                    className="info-header"
                    onClick={this.toggleDisplayOpen}>STYLE INFO</h1>
                <div className="info-container">
                    {this.codeDisplay()}
                    <div className="info-text" style={textStyle}>
                        {this.props.words.map(word => word+" ")}
                    </div>
                </div>
                {this.headDisplay()} 
            </div>
        )
    }
}

export default InfoDisplay