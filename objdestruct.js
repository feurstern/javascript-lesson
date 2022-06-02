//unpack properties to distinct variabel

let obj ={h:100,s:true};
let {h,s}=obj

console.log(h);
console.log(s)

let {surname,fullname}={surname:"HAtsune", fullname:"Miku"};
console.log(surname+fullname)


const userGreeting = (name)=>{
    console.log("Good morning", name+"!")
}
userGreeting("Rio")