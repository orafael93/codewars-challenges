const drawStairs = require('./script')

it('should draw correct stairs (1)', () => {
  const result = drawStairs(1)

  expect(result).toBe("I")
})

it('should draw correct stairs (3)', () => {
  const result = drawStairs(3)

  expect(result).toBe("I\n I\n  I")
})

it('should draw correct stairs 5', () => {
  const result = drawStairs(5)

  expect(result).toBe("I\n I\n  I\n   I\n    I")
})