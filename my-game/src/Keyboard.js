import React from "react";

export default function Keyboard() {

    const keys = [
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "I",
        "O",
        "P",
        //second line
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "ENTER",
        //third line
        "Z",
        "X",
        "C",
        "V",
        "B",
        "N",
        "M",
        "<<",
    ]

    const handleClick=()=>{
        console.log(`clicked `)

    }

    return (
        <>
            <div className="keyboard-container">
                {keys.map(key => (
                    <button key={key}  id={key} onClick={handleClick}>{key}</button>
                ))}
            </div>
        </>
    )
}