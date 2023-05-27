const mag = require('./script')

const testCases = [
  [["PT92", 6], 2],
  [["M4A1", 8], 1],
  [["M16A2", 19], 2],
  [["PSG1", 31], 19],
  [["PT92", 19], 4],
];

it('should return the number of magazines a soldier needs', () => {
  for(let [input, expected] of testCases) {
    const result = mag(input)
    expect(result).toBe(expected)
  }
})