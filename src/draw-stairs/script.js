const createBlankSpaces = (n) => Array.from({ length: n })
                          .reduce((acc) => acc += ' ', '')

const drawStairs = (n) => {
  let stairs = ''

  for(let i = 1; i < n; i++) {
    stairs += `I\n${createBlankSpaces(i)}`
  }

  return `${stairs}I`
}

module.exports = drawStairs