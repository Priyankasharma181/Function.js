var readline = require("readline-sync")
var age = readline.question("enter the age: ")
let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby
// no parameter
// const add = function(){
//     return "priyanka"
// }
// console.log(add())
// // with parameter
// const add(add1)=>{
//     return "madhu"
// })

// let q = (x, y) => x * y;
// console.log(q(3,6));





