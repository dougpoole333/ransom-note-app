import React from "react"
import Word from "./Word.js"

function RenderScreen(props){
        const wordArray = props.words.map((word,i) => {
            return <Word key={i} word={word} fonts={props.fonts} grab={props.grab}/>
        })
        return(
            <div className="render-screen" >
                {wordArray}
            </div>
        )
    }

export default RenderScreen