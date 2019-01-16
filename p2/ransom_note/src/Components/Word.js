import React from "react"
import Letter from "./Letter.js"

function Word(props){

    const returnRandomColor = () => {
        let r=Math.floor(Math.random()*255)
        let g=Math.floor(Math.random()*255)
        let b=Math.floor(Math.random()*255)
            return `rgb(${r},${g},${b})`
    }

    const returnRandomGrayscale = () => {
        let n=Math.floor(Math.random()*255)
            return `rgb(${n},${n},${n})`
    }

    const returnRandomFontColor = () => {
        let array = [returnRandomColor(), returnRandomGrayscale()]
        return array[Math.floor(Math.random()*2)]
    }

    const letterArray = [...props.word].map((letter,i) => {
        let randFontIndex=Math.floor(Math.random()*900)
        return(
        <Letter 
            key={i} 
            letter={letter} 
            color={returnRandomFontColor()} 
            font={props.fonts[randFontIndex]}/>)
    })

    return(
        <div className="word">{letterArray}</div>
    )
}



export default Word