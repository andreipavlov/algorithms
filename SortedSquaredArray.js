// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns
// a new array of the same length
//with the squares of the original integers 
// also sorted in ascending order

// This is the first solution that came up to my mind

function sortedSquaredArray(array) {

let result = array.map(x => x * x);
  let sorted = result.sort((a, b) => a - b)
    return result

  console.log (sortedSquaredArray([2,2,3,4,5]))
