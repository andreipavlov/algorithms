// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

// Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

// You can assume that there will be at most one pair of numbers summing up to the target sum.
// Напишите функцию, которая принимает непустой массив различных целых чисел и целое число, представляющее целевую сумму. 
// Если сумма любых двух чисел во входном массиве равна целевой сумме, функция должна вернуть их в массиве в любом порядке. 
// Если нет двух чисел, суммирующих целевую сумму, функция должна вернуть пустой массив.

// Обратите внимание, что целевая сумма должна быть получена путем суммирования двух разных целых чисел в массиве;
// вы не можете прибавить к себе одно целое число, чтобы получить целевую сумму.


// Solution 1

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) return [firstNum, secondNum];
    }
  }
  return [];
}
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
