import React from "react"

function UserInput(){
    return(
        <form>
            <input type="text" name="userInput" value="Your Message Here"/>
            <input type="submit" value="Render"/>
        </form>    
    )
}

export default UserInput