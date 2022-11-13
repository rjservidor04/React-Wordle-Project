import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'

export default function Wordle({ solution }) {
    const { turn, currentGuess, usedKeys, guesses, isCorrect, handleKeyup } = useWordle(solution)
    
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if(isCorrect) {
            console.log("Congrats, you win!")
            window.removeEventListener('keyup', handleKeyup)
        }

        if(turn > 5) {
            console.log("Sorry, you lost")
            window.removeEventListener('keyup', handleKeyup)
        }

        return  () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect])


    return (
        <div>
            <div>Solution = {solution}</div>
            <div>Current Guess = {currentGuess}</div>
            <Grid currentGuess = {currentGuess} guesses = {guesses} turn = {turn} />
            <Keypad usedKeys = {usedKeys} />
        </div>
    )
}
