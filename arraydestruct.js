let arr=["1","2","3"];
let[one, two, three]= arr;

console.log(one)
console.log(two)
console.log(three)

//es6 desturcting an array
let a= ()=>{
return[1,2,3];
};

let [ eleven, ,twelve] =a();
console.log(a)

clearInterval();