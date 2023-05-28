const warnTheSheep = require('./script')

it('["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]', () => {
  const result = warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])

  expect(result).toBe('Oi! Sheep number 2! You are about to be eaten by a wolf!')
})

it('["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]', () => {
  const result = warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])

  expect(result).toBe('Oi! Sheep number 5! You are about to be eaten by a wolf!')
})

it('["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]', () => {
  const result = warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])

  expect(result).toBe('Oi! Sheep number 6! You are about to be eaten by a wolf!')
})

it('["sheep", "wolf", "sheep"]', () => {
  const result = warnTheSheep(["sheep", "wolf", "sheep"])

  expect(result).toBe('Oi! Sheep number 1! You are about to be eaten by a wolf!')
})

it('["wolf"]', () => {
  const result = warnTheSheep(["wolf"])

  expect(result).toBe('Pls go away and stop eating my sheep')
})

it('["sheep", "sheep", "wolf"]', () => {
  const result = warnTheSheep(["sheep", "sheep", "wolf"])

  expect(result).toBe('Pls go away and stop eating my sheep')
})