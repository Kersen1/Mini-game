import React from "react";

export default function Tiles({length, state}) {
    const lengthOfRows = 5
    const array = [...state.word, ...new Array(length - state.word.length).fill("     ")]
    array[state.word.length] = state.key.join("")

    const getColumn = (el) => {
        const result = [];
        for (let i = 0; i < lengthOfRows; i++) {
            result.push(<div key={i}  className="column">{el[i] || ""}</div>)
        }

        return result
    }
    console.log(array)
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


