import React from "react";

export default function Keyboard({ handleClick }) {

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
        "DLT",

    ]



    return (
        <>
            <div className="keyboard-container">
                {keys.map(key => (
                    <button key={key}  id={key} onClick={handleClick(key)}>{key}  </button>
                ))}
            </div>
        </>
    )
}