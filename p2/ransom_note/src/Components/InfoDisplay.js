import React, { Component } from "react"

class InfoDisplay extends Component{
    constructor(props){
        super()
        this.state = {
            open: false
        }
    }
    toggleDisplayOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render(){
        return(
            <div
                className="info-display"
                style={this.state.open ? {bottom: "0"} : {bottom: "-200px"}}>
                <h1 
                    className="info-header"
                    onClick={this.toggleDisplayOpen}>STYLE INFO</h1>
            </div>
        )
    }
}

export default InfoDisplay