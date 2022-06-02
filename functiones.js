function add(x,y) {
    var sum=x*y;
    console.log(sum)
    
}
add(12,5)

const multiply=(x, y)=>{

    let sum=x*y;
    console.log(sum);
}

const greet=x=> console.log("Welcome", x); 

const test =(a, b=42, c=7)=>{
    return  a*(b+c);
}
const userGreeting= name=>{
    console.log("Hi there", name)
}
console.log(test(4));
multiply(5,4)
greet("Rio")
userGreeting("HAtsune MIku")