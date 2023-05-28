const warnTheSheep = (queue) => {
  const wolfIsFirstOnQueue = queue[queue.length - 1] === 'wolf'
  
  if(wolfIsFirstOnQueue) {
    return 'Pls go away and stop eating my sheep'
  }

  const wolfPositionInTheList = queue.findIndex((animal) => animal === 'wolf') 
  const listWithSheepsAheadWolf = queue.slice(wolfPositionInTheList + 1).length

  return `Oi! Sheep number ${listWithSheepsAheadWolf}! You are about to be eaten by a wolf!`
}

module.exports = warnTheSheep