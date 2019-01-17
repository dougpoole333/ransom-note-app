import React from "react"
import Letter from "./Letter.js"

function Word(props){

    const returnRandomColor = () => {
        let r=Math.floor(Math.random()*255)
        let g=Math.floor(Math.random()*255)
        let b=Math.floor(Math.random()*255)
            return [r,g,b]
    }

    const returnRandomGrayscale = () => {
        let n=Math.floor(Math.random()*255)
            return [n,n,n]
    }

    const returnRandomFontColor = () => {
        let array = [returnRandomColor(), returnRandomGrayscale()]
        return array[Math.floor(Math.random()*1.5)]
    }

    const returnCompColor = (array) => {
       return array.map(el => ((el + 122) % 255))
    }

    const letterArray = [...props.word].map((letter,i) => {
        const randFontIndex=Math.floor(Math.random()*900)
        const color = returnRandomFontColor()
        const backgroundColor = returnCompColor(color)
        return(
        <Letter 
            key={i} 
            letter={letter}
            font={props.fonts[randFontIndex]}
            grab={props.grab}
            color={color}
            backgroundColor={backgroundColor}/>)
    })



    return(
        <div className="word">{letterArray}</div>
    )
}



export default Word