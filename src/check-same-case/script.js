const sameCase = (a, b) => {
  const aIsALetter = a.match(/[a-z]/gi)
  const bIsALetter = b.match(/[a-z]/gi)

  if(!aIsALetter || !bIsALetter) {
    return -1
  }

  const aAndBAreSameCase = (a.match(/[a-z]/g) && b.match(/[a-z]/g)) || (a.match(/[A-Z]/g) && b.match(/[A-Z]/g))

  if(aAndBAreSameCase) {
    return 1
  }
  
  return 0
}

module.exports = sameCase