const getLetterFromWord = (word, letterToGet) => word[letterToGet]

const feast = (beast, dish) => {
    const beastFirstLetter = getLetterFromWord(beast, 0)
    const beastLastLetter = getLetterFromWord(beast, beast.length - 1)

    const dishFirstLetter = getLetterFromWord(dish, 0)
    const dishLastLetter = getLetterFromWord(dish, dish.length - 1)
    
    const result = (beastFirstLetter === dishFirstLetter)
                   && (beastLastLetter === dishLastLetter)

    return result
}

module.exports = feast