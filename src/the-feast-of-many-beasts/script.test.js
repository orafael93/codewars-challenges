const feast = require('./script')

it('should return true', () => {
  const result = feast('great blue heron', 'garlic naan')
  expect(result).toBe(true)
})

it('should return true', () => {
  const result = feast('chickadee', 'chocolate cake')
  expect(result).toBe(true)
})

it('should return false', () => {
  const result = feast('brown bear', 'bear claw')
  expect(result).toBe(false)
})