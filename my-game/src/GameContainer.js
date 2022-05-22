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
    const [length, setLength] = useState(3)
    const [message, changeMessage] = useState("USE ONLY EXISTING WORDS")
    const [isVisibleTiles, changeVisibilityOfTiles] = useState({
        visibility: "hidden",
        width: "0px",
        height: "0px"
    })
    const [isVisibleStart, changeVisibilityOfStart] = useState({
        visibility: "visible"
    })

    const guessWord = "words"
    let changedToSting = state.key.toString().toLowerCase().replaceAll(',', '')


    const handleClick = key => () => {
        console.log(`clicked`, key)
        if (key === "ENTER" && state.key.length === 5) {
            setState(prevState => {
                return ({
                    ...prevState,
                    word: [...prevState.word, prevState.key.join("")],
                    key: []
                })
            })
            if (guessWord === changedToSting) {
                console.log(guessWord, changedToSting)
                console.log("WYGRANA")
                changeMessage("You've won")


                    document.querySelector("#root > div > div.game-box > section > div:nth-child(2) > div:nth-child(1)").style.backgroundColor ='green'

            }

            return;
        } else if (key === "ENTER" && state.key.length < 5) {
            console.log("word is too short")
            changeMessage("Word is too short")
            return;
        } else if (state.key.length > 5) {
            console.log("Word is too long")
            changeMessage("Word is too long")
            return;
        } else if (state.key.length < 5 && key !== "DLT") {
            setState(prev => ({
                ...prev,
                key: [...prev.key, key]
            }))
        } else if (key === "DLT") {
            setState(prevState => {
                return ({
                    ...prevState,
                    key: [...prevState.key].slice(0, -1)
                })
            })

            return;
        }
        console.log(state.key)

    }


    const handleStart = () => {
        console.log("handleStart works")
        changeVisibilityOfTiles(prevState => {
            return ({
                ...prevState,
                width: "100%",
                visibility: "visible",
                height: "100%"
            })
        })
        changeVisibilityOfStart(prev => {
            return ({
                ...prev,
                visibility: "hidden",
                width: "0px",
                height: "0px",
            })
        })
        changeMessage("Good Luck!")
    }

//more to do here

    return (
        <>
            <div className="game-container">
                <Title></Title>

                <Message message={message}></Message>
                <div className="game-box">

                    <button onClick={handleStart} style={isVisibleStart} className="game-start">Start Game</button>

                    <section style={isVisibleTiles} className="password-box">
                        <Tiles length={length} state={state}></Tiles>
                    </section>
                </div>

                <Keyboard handleClick={handleClick}></Keyboard>
                <form className="change-length-container">
                    <div style={isVisibleStart} className="change-length-box">
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


/*
fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=1&wordLength=5', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
*/
