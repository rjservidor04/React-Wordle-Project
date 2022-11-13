import React from 'react'

export default function Modal( { isCorrect, turn, solution } ) {
  return (
    <div className = 'modal'>
        {isCorrect && (
            <div>
                <h1>Congrats, You Win!</h1>
                <p className = 'solution'>{solution}</p>
                <p>You found the solution in {turn} guesses</p>
            </div>
        )}

        {!isCorrect && (
            <div>
                <h1>Sorry, Better Luck Next Time :)</h1>
                <p className = 'solution'>The word is {solution}</p>
            </div>
        )}
    </div>
  )
}
