import { LETTERS } from "../shared/LETTERS"
import React, { useState } from 'react';

const gridGenerator = () => {
    const vowels = LETTERS.filter(letters => {
        return letters.vowel === true
    })
    const consonants = LETTERS.filter(letters => {
        return letters.vowel !== true
    })
    const getRandomLetter = () => {
        const chosenLetters = Math.random() < 0.4 ? vowels : consonants
        const randomChosen = Math.floor(Math.random() * chosenLetters.length)
        return chosenLetters[randomChosen]
    }
    const grid = []
    for (let row = 0; row < 6; row++) {
        const rowArray = []
        for (let col = 0; col < 6; col++) {
            const randomLetter = getRandomLetter()
            rowArray.push(randomLetter)
        }
        grid.push(rowArray)
    }
    console.log(grid)
    console.log(vowels)
    console.log(consonants)
    console.log(getRandomLetter())
}

export default gridGenerator