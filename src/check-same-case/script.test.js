const sameCase = require('./script')

it('should return -1 when a is not a letter', () => {
  const result = sameCase('1', 'B')

  expect(result).toBe(-1)
})

it('should return 1 when a and b has a same case (lowercase)', () => {
  const result = sameCase('a', 'x')

  expect(result).toBe(1)
})

it('should return 1 when a and b has a same case (uppercase)', () => {
  const result = sameCase('A', 'Z')

  expect(result).toBe(1)
})

it('should return 0 when a and b has not a same case', () => {
  const result = sameCase('a', 'Z')

  expect(result).toBe(0)
})