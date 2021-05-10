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


//anagram

function checkAnagrams(str1, str2){

  var newstr1 = str1.toLowerCase().split('').sort().join();
  var newstr2 = str2.toLowerCase().split('').sort().join();

  if(newstr1 == newstr2){
    console.log("String is Anagrams");
  }
  else{
    console.log("String is Not Anagrams");
  }

}

checkAnagrams("Hello", "lolHe");
checkAnagrams("Indian", "nIndisn");
