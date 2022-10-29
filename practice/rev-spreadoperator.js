const studentMajor = ["Computer Science", "Biology", "Management", "Applied Mathematic"];
const studentAge = [23,45,15,21]


studentMajor.push("Accountant");

console.log(studentMajor);
console.log(...studentMajor, ...studentAge);

// destructing array

const [,,,,beforeLastMajor,lastMajor = "Biology"] = studentMajor;

console.log(lastMajor); 
console.log(beforeLastMajor);
console.log(...studentMajor, ...studentAge);


//swap the value of variable using old method 

let a = 1;
let b  = 5;
let temp;

temp  = a;
a= b;
temp =b;

//swap the value of variable using ES6 Array

let z =5;
let x = 6;
console.log("z="+z);
console.log("x="+x);

//after swap 
[z,x] = [x,z]

console.log("z="+z);
console.log("x="+x);


//default values

const favouriteColour = ["Blue"];

const[firstColor, secondColor="Red"] = favouriteColour;

console.log(firstColor);
console.log(secondColor);
console.log(favouriteColour[0]);
