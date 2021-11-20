const readline = require("readline-sync")
const user = readline.question("enter the num :")
const number = function (num) {
    if (num % 10 === 3) {
        console.log("yes last num is 3");
        if (num % 3 === 0) {
            console.log("yes! it is divisible by 3");
        } else {
            console.log("it is not divisible by 3");
        }
    } else {
        console.log("no! last num is not 3");
    }
}
(user)


// function aa(user){
//     console.log(user);
//     console.log("hi")
// }

// const aa = (user) => {
//     console.log(user);
//     console.log("hi")
// };
// aa(user)