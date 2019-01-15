import React, { Component } from "react"
import Letter from "./Letter.js"

class RenderScreen extends Component{
    
    render(){
        const letterComponents = this.props.letters.map((letter, i) => {
            if (letter !== " "){
                return(<Letter key={i} letter={letter} />)
            } else {return (<div key={i} className="space"></div>)}
        })
        return(
            <div className="render-screen">
                {letterComponents}
            </div>
        )
    }
}

export default RenderScreen