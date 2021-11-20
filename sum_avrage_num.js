// Write a function named average which takes 3 numbers and prints the sum of 3 numbers and the average of 3 numbers.
var readline = require("readline-sync")
var user = readline.questionInt("enter the num:")
function average(number){
    sum = 0
    average = 0
    for(i= 0;i<user;i++){
        a = readline.questionInt("enter the num:")
        sum = sum + a
    }console.log(sum,"is sum of the num");

        average = sum/user
        console.log(average,"is avg");

}average(user)
