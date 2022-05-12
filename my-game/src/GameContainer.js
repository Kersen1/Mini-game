import React, {useState} from "react";
import Tiles from "./Tiles";
import Title from "./Title"
import Keyboard from "./Keyboard";
import Message from "./Message";


export default function GameContainer() {
    const [state, setState] = useState({
        key: [],
        word: [],
    })


    const [length, setLength] = useState(5)
    const [message,changeMessage] = useState("INITIAL MESSAGE")
console.log(message)

    const handleClick = key => () => {
        console.log(`clicked`, key)
        if (key === "ENTER" && state.key.length===5) {
            setState(prevState => {
                return ({
                    ...prevState,
                    word: [...prevState.word, prevState.key.join("")],
                    key: []
                })
            })
            return;
        }
        else if (key==="ENTER" && state.key.length !== 5){
            console.log("za krotkie slowo")

            changeMessage("Word is too short")
            return;
        }

        setState(prev => ({
            ...prev,
            key: [...prev.key, key]
        }))

    }
//more to do here

    return (
        <>
            <div className="game-container">
                <Title></Title>

                <Message message={message}></Message>
                <div className="game-box">

                    <section className="password-box">
                        <Tiles length={length} state={state}></Tiles>
                    </section>
                </div>

                <Keyboard handleClick={handleClick}></Keyboard>
                <form className="change-length-container">
                    <div className="change-length-box">
                        <h2>Change number of tries</h2>

                        <select className="change-length-options" onChange={(e) => setLength(e.target.value)}>

                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                        </select>
                    </div>
                </form>

            </div>
        </>
    )
}
