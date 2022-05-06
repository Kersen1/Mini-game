import React from "react";

export default function Tiles({length}) {
    const array = []
    console.log(array)
    console.log(length)
    for (let i = 0; i < length; i++) {
        array.push("")
    }
    console.log(array)
    return (
        <>
            {array.map((index) =>
                <div className="row"  key={index} >
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                </div>
            )}
        </>
    )
}


