import React from 'react'

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable}) => {
    let finalMessage = '';
    let finalMessageRevealWord = "";
    let playable = true;
    return (
        <div className='popup-container'>
            <div className='popup'>
                <h2>{finalMessage}</h2>
                <h3>{finalMessageRevealWord}</h3>
                <button id="play-button">Play again</button>
            </div>
        </div>
    )
}

export default Popup
