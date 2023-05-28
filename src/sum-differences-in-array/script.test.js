const sumOfDifferences = require('./script')

it("sumOfDifferences([1, 2, 10]", function() {
  expect(sumOfDifferences([1, 2, 10])).toBe(9);
});

it("sumOfDifferences([-3, -2, -1])", function() {
  expect(sumOfDifferences([-3, -2, -1])).toBe(2);
});