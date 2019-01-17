import React, { Component } from "react"

class InfoDisplay extends Component{
    constructor(props){
        super()
        this.state = {
            open: false,
            fontFamily: "",
            color: "",
            backgroundColor: ""
            
        }
    }
    toggleDisplayOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }

    parseDisplayString = (string) => {
       let split = string.split(",")
       let merge = [split[0], split[1]+ "," + split[2]+","+split[3], split[4]+ "," + split[5]+","+split[6]]
       return merge
    }

    componentWillReceiveProps(next){
        if(next.display){
            let array=this.parseDisplayString(next.display)
            this.setState({
                fontFamily: array[0],
                color: array[1],
                backgroundColor: array[2]
            })
        }
    }

    render(){
        return(
            <div
                className="info-display"
                style={this.state.open ? {bottom: "0"} : {bottom: "-200px"}}>
                <h1 
                    className="info-header"
                    onClick={this.toggleDisplayOpen}>STYLE INFO</h1>
                <div className="display-window">
                    {this.state.fontFamily}<br/>
                    {this.state.color}<br/>
                    {this.state.backgroundColor}
                    
                </div>
            </div>
        )
    }
}

export default InfoDisplay