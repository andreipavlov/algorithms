function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse("aveotkosaiisatsana"))


function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log (reverseString('hello'))
