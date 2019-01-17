import React from "react"
import Letter from "./Letter.js"

function Word(props){



    const letterArray = [...props.word].map((letter,i) => {
        let randFontIndex=Math.floor(Math.random()*900)
        return(
        <Letter 
            key={i} 
            letter={letter}
            font={props.fonts[randFontIndex]}
            grab={props.grab}
            hello="hello"/>)
    })

    return(
        <div className="word">{letterArray}</div>
    )
}



export default Word