import React from "react";

export default function Message({message}){
    return(
        <>
        <div className="message-container">Guess The Word</div>
            <div className="instructions-container">{message}</div>
        </>
    )
}