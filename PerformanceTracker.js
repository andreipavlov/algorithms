// compare n time complexities

function addUpTofirst(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTofirst(30));

// this function would faster for n as only 3 operations involved ( multiply , add and devision)
function addUpToSecond(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpToSecond(20));
