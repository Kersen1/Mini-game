import React, {useState} from "react";
import Tiles from "./Tiles";
import Title from "./Title"
import Keyboard from "./Keyboard";
import Message from "./Message";
import Rules from "./Rules";


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

    const [gameOver, changeIfGameOver] = useState(true)

    const [line, changeLine] = useState(1)

    const [guessWord,changeGuessWord] =useState("words")



    const getIt = guessWord.toUpperCase().split('')


    let changedToSting = state.key.toString().toLowerCase().replaceAll(',', '')



    console.log(guessWord.toUpperCase().split(''))


    const guessWordArray= [
        "price",
        "hired",
        "blast",
        "sweat",
        "reuse",
        "haste",
        "admit",
        "trees",
        "slump",
        "title",
        "going",
        "front",
        "brawl",
        "sweat",
        "grand",
        "taunt",
        "bears",
        "piano",
        "shirt",
        "crawl",
        "smell",
        "mouse",
        "owned",
        "break",
        "block",
        "lobby",
        "haste",
        "share",
        "wager",
        "after",
        "early",
        "woods",
        "pouch",
        "toast",
        "visit",
        "suave",
        "cower",
        "bread",
        "scary",
        "words"
    ]

    const wordGenerator =function getRndInteger(min, max) {
        return ( guessWordArray[(Math.floor(Math.random() * (max - min) ) + min)])
    }



    const handleClick = key => () => {
        if (gameOver === true) {
            return;
        } else {
            console.log(`clicked`, key)
            if (key === "ENTER" && state.key.length === 5) {
                if (state.word.length !== length-1) {

                setState(prevState => {
                    return ({
                        ...prevState,
                        word: [...prevState.word, prevState.key.join("")],
                        key: []
                    })
                })
            }

                if (guessWord === changedToSting) {
                    changeMessage("You've won")
                    changeIfGameOver(true)
                }
                if (guessWord!==changedToSting && state.word.length===length-1){
                    changeMessage("Better Luck Next Time!")
                }

                for (let i = 0; i <= 4; i++) {
                    if (getIt[i] === state.key[i]) {
                        document.querySelector(`#root > div > div.game-box > section > div:nth-child(${line}) > div:nth-child(${i+1})`).style.backgroundColor = 'green'
                    } else if ((getIt[i] !== state.key[i]) && (getIt.includes(state.key[i]) === true)) {
                        document.querySelector(`#root > div > div.game-box > section > div:nth-child(${line}) > div:nth-child(${i+1})`).style.backgroundColor = 'yellow'

                    } else if ((getIt[i] !== state.key[i]) && (getIt.includes(state.key[i]) !== true)){
                        document.querySelector(`#root > div > div.game-box > section > div:nth-child(${line}) > div:nth-child(${i+1})`).style.backgroundColor = 'red'
                    }
                        }
                if (state.word.length === length-1 && state.key.length===5){
                    changeIfGameOver(true);
                }

                /*}*/
                changeLine(prev => prev + 1)

                return;
            }
            else if (key === "ENTER" && state.key.length < 5) {
                console.log("word is too short")
                changeMessage("Word is too short")
                return;
            }
            else if (state.key.length > 5) {
                console.log("Word is too long")
                changeMessage("Word is too long")
                return;
            }
            else if (state.key.length < 5 && key !== "DLT") {
                setState(prev => ({
                    ...prev,
                    key: [...prev.key, key]
                }))
            }
            else if (key === "DLT") {
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
        changeGuessWord(wordGenerator(1,39))
      console.log(guessWord)
        changeIfGameOver(false)
        changeMessage("Good Luck!")
    }


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
                <Rules></Rules>

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
