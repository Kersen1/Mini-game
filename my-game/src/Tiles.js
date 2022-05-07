import React from "react";

export default function Tiles({length, state}) {
    const array = [...state.word, ...new Array(length - state.word.length).fill("     ")]
    array[state.word.length] = state.key.join("")

    const getColumn = (el) => {
        const result = [];
        for (let i = 0; i < length; i++) {
            result.push(<div key={i} className="column">{el[i] || ""}</div>)
        }

        return result
    }
    console.log(array, "dupa")
    return (
        <>
            {array.map((index, i) =>
                <div className="row"  key={i} >
                    {getColumn(index)}
                </div>
            )}
        </>
    )
}


