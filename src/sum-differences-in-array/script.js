const sumOfDifferences = (arr) => {
  const sortedArray = arr.sort((a, b) => b - a)

  // for(let i = 0; i < sortedArray.length; i++) {
  //   const nextNumber = sortedArray[i + 1]

  //   if(nextNumber === undefined) {
  //     results.push(0)   
  //   } else {
  //     results.push(sortedArray[i] - nextNumber) 
  //   } 
  // }

  // return results.reduce((acc, item) => acc + item, 0)

  const result = sortedArray.map((currentItem, i, arr) => arr[i + 1] !== undefined ? currentItem - arr[i + 1] : 0)

  return result.reduce((acc, item) => acc + item, 0)
}

module.exports = sumOfDifferences