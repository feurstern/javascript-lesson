/* this the way of take the user's input by using node js

If you use browser you can use prompt() method
but if you use console you have to inmport the readline() module 
*/

const readline = require("readline");
const ac = new AbortController();
const signal = ac.signal;


const r1 = readline.createInterface({input: process.stdin,
output: process.stdout})

let userName = '';
let userAge = '';

r1.question("What's your name", function(string){
    userName = string;

    console.log(`Your name is ${userName}`);

    r1.close();
    
})


console.log(userAge);

