// Write a function squares_of_numbers which takes a number as a parameter, and runs a loop from 1 to the given number, and makes the number and square of a number as key, value pair. See the example below.
const a = require("readline-sync")
const num1 = a.question("enter the num:")
function squares_of_numbers(num) {
    obj = {}
    for (var i = 0; i < num; i++) {
        obj[i] = i * i
    } console.log(obj);
}
squares_of_numbers(num1)