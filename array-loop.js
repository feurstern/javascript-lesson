const { Console } = require("console");

let evenNumber = [];

for(let i=1; i<=100;i++){
    if(i%2==0){
      evenNumber.push(i);
      console.log(evenNumber);
    }
}

let trying =[10,20,30];

let result = 10 * trying[0];
console.log(result);

// TODO
const currency = new Map([ ["USD",14000],["JPY", 131] ,["SGD",1100], ["MYR", 3500]]);
const priceInJPY = 5000;

console.log(currency.get("USD"));
const priceIDR = priceInJPY* currency.get("JPY");
console.log(priceIDR)




