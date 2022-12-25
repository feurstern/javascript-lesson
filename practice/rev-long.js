const addtion=(x,y)=>{
    return x+y;
}


let x = Math.floor(Math.random()*100);
let y = Math.floor(Math.random()*100);
let addtionResult = addtion(x,y);

console.log(`The value of the first number: ${x}`);
console.log(`The value of the second number: ${y}`);



console.log(` The result of ${x} + ${y} = ${addtionResult}`);