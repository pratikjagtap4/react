import "./Play.css"
import { useState } from "react";
function Play({onPlay ,onPause , children}){
    console.log("render Play")

    let [state,setState ]= useState(false) ;

    function handleClick(){
        if(state) onPause();
        else onPlay();

        setState(!state)
    }

    return(
        <button onClick={handleClick}>{children}{state ? "⏸️" : "▶️"} </button>
    )
}
export default Play;