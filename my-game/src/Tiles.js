import React from "react";

export default function Tiles({length}) {
    const array = []
    console.log(array)
    console.log(length)
    for (let i = 0; i < length; i++) {
        array.push("x")
    }
    console.log(array)
    return (
        <>
            {array.map(() =>
                <div className="row">
                    <div>Y</div>
                    <div>Y</div>
                </div>
            )}
        </>
    )
}


