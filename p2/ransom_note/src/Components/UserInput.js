import React from "react"

function UserInput(props){
    return(
        <form onSubmit={props.onSubmit}>
            <input
                type="text"
                name="userInput"
                value={props.value}
                onChange={props.onChange}
                placeholder="Enter text here"/>
            <input
                type="submit"
                value="Render"/>
        </form>    
    )
}

export default UserInput