const myAge = new Set([1,2,34,5,1,2,5,10]);

console.log(myAge);
myAge.add(4,5,3,2,12);
console.log(myAge);
  const restaurant ={
      name: "Hatsune Fast Food",
      city: "Fukushima",
      "favourite drink":"sake",
      "favourite food":"Sushi",
      isVegan : false
  
    };
    console.log(restaurant);


let {name} = restaurant;
let {"favourite drink" : favouriteDrink} =  restaurant;

console.log(name);
console.log(favouriteDrink);

   