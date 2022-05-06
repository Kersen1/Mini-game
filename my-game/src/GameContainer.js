import React from "react";
import Tiles from "./Tiles";
import Title from "./Title"
import Keyboard from "./Keyboard";
import Message from "./Message";

export default function GameContainer() {
    return (
        <>
            <div className="game-container">
            <Title></Title>
            <Message></Message>
            <Tiles></Tiles>
            <Keyboard></Keyboard>
            </div>
        </>
    )
}