import React, { Component } from "react"
import Word from "./Word.js"

class RenderScreen extends Component{
    
    render(){
        const wordArray = this.props.words.map((word,i) => {
            return <Word key={i} word={word} />
        })
        return(
            <div className="render-screen">
                {wordArray}
            </div>
        )
    }
    
}

export default RenderScreen