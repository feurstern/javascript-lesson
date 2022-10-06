/* 
set is different than any object type, there's no index, unique, and unduplicateable.
*/

const userAge = new Set([25,39,50,69,11]);

//print the value of the set
console.log(userAge);

// to add the value of the set using add() for only one argument. You can't add more than one value.
userAge.add(30);
console.log(userAge);

// to delete the value of the set using delete() for only one argument
userAge.delete(25);
console.log(userAge);

const restaurant ={
    name: 'Hatsune Miku Fast Food',
    city:'Tokyo',
    favoriteDrink : 'Ocha',
    favoriteFood :'Sushi',
    isVegan : false
  };

  console.log(restaurant.name)