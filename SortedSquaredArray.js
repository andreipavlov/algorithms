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
  

  // O(nlogn) time | O(n) space - where n is the length of the input array
function sortedSquaredArray(array) {
 const sortedSquares = new Array(array.length).fill(0);
 for (let idx = 0; idx < array.length; idx++) {
 const value = array[idx];
 sortedSquares[idx] = value * value;
 }
 sortedSquares.sort((a, b) => a - b);
 return sortedSquares;
}
console.log (sortedSquaredArray([20,2,30,4,5, 2,0,4,3,1]))
