// Write a function that takes in a string (“DOG”) and outputs every combination possible of that word in an array


function findPerms(str) {
if (str.length === 0) return "";
if (str.length === 1) return str;
let result = [];
for (let i = 0; i < str.length; i++) {
const currentChar = str[i];
const remainingChars = str.slice(0, i) + str.slice(i + 1);
for (let j = 0; j < remainingChars.length; j++) {
 result.push(currentChar + findPerms(remainingChars)[j]);
   }
 }
 return result;
}

console.log (findPerms("dog"))


// Write a function that checks if two strings are permutations of each other

function arePermutations(str1, str2){
if (typeof str1 !==  typeof str2) return ([str1 , str2])
else{
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
}
console.log (arePermutations("tacocat", "ttacoca"))


function(s, t) {
 if(s === t) return true
 if(s.length !== t.length) return false

 let count = {}

 for(let letter of s)
  count[letter] = (count[letter] || 0) + 1

 for(let letter of t) { 
  if(!count[letter]) return false
  else --count[letter]
 }

 return true;
}
