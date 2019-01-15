import React, { Component } from "react"

class Letter extends Component{
    constructor(props){
        super(props)
        this.state ={
            color: "",
            backgroundColor: "",
        }
    }
    


    render(){
        const letterStyle = {
            backgroundColor: "pink",
            padding: "5px",
            margin: "auto 5px",
            fontSize: "40px",
        }

        return(
            <div style={letterStyle}>
                {this.props.letter}
            </div>
        )
    }
    
}

export default Letter