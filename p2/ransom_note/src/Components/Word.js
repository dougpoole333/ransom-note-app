import React, {Component} from "react"
import Letter from "./Letter.js"

function Word(props){
    const letterArray = [...props.word].map((letter,i) => {
        return(<Letter key={i} letter={letter}/>)
    })
    return(
        <div className="word">{letterArray}</div>
    )
}



export default Word