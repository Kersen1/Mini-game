import React,{useState} from "react";

export default function Rules (){
   const [show,changeShow] = useState(true)
    const handleClick=()=>{
       changeShow(false)
    }
    const handleClose=()=>{
       changeShow(true)
    }

if (show){
    return(
        <>
            <button className="rules-button" onClick={handleClick} >Rules</button>

        </>
    )}
return <div className="rules-box"> <button className="close-button" onClick={handleClose}>X</button>
        <ul>Your goal is to guess a word that exists</ul>
        <ul>The word has to be 5 letters long</ul>
    <ul>You can change the length of the game before you start</ul>
</div>

}
