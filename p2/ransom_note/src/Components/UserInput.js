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
            <input
                type="button"
                value="Clear"
                onClick={props.handleClear}/>
        </form>    
    )
}

export default UserInput