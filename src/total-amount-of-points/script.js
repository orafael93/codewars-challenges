const points = (games) => {
  return games.map((game) => {
    const [x, y] = game.split(':').map((team) => Number(team))

    if(x > y) {
      return 3
    }

    if(y > x) {
      return 0
    }

    return 1

  }).reduce((acc, team) => acc + team, 0)
}

module.exports = points