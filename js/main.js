// Question 1:

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]
let text = ""
let not = ""

// Method 1:
function findWords() {
    for (let i = 0; i <= dog_names.length; i ++){
        if (dog_string.includes(dog_names[i])) {
            text += (`Matches ${dog_names[i]} `)
        } 
        else {
            not = ("No Matches")
        }
    }   
    if (text.length > 0){
        return text
    } else{
        return not
    }
}
console.log(findWords())

// Method 2:
// function findWords(parameter1, parameter2) {
//     if (parameter1.includes(parameter2)) {
//         console.log(`Matched ${parameter2}`)
//     } 
//     else {
//         console.log("No Matches")
//     }
// }
// findWords(dog_string, 'Max')

// Question 2:
let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]
function replaceEvens(arr){
    for (let i = 0; i < arr.length; i += 2){
        arr.splice(i, 1, "even index")
    }
    return arr
}

console.log(replaceEvens(arr))

// Codewars Question 1:

// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function convertString(num){
    return num.toString()
}
console.log(convertString(5))
console.log(typeof(convertString(5)))

// Codewars Question 2:
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function countPaper(x,y){
    if (x < 0 || y < 0){
        return 0;
    } else {
        return (x * y)
    }
}
console.log(countPaper(5, 5))
console.log(countPaper(-5, 5))