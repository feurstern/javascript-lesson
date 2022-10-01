const Employeer ={
    name : "Hatsune Miku",
    age : 12,
    nationality : "Japan",
    isStudent :false
};

//the way of calling the value of object
console.log(Employeer)
console.log(Employeer["name"]);
console.log(Employeer.age);

Employeer.name = "Yukirin";

console.log(Employeer.name);

//array

let languagePreferences =["Japanese", "English", "Chinese", "German", "Vietnamese"];
languagePreferences.push("Korean");
languagePreferences.pop();

languagePreferences.shift(); // to delete the first element of array, now Japanese has been deleted
languagePreferences.unshift("Nihon-go"); // to add the first element of array, now the value of the first index array is Nihon-go

delete languagePreferences[6]; // to delete the exact of array index.

for(let i=0; i<=languagePreferences.length;i++){
    console.log(languagePreferences[i]);
}

languagePreferences.splice(0,3); // to delete all the  listed index array, Nihon-go, English and Chinese have been deleted.



/* destructing object with ES6 with different variable
const {name,age,nationality, isStudent} = Employeer 
*/


const {name:username,age:userAge,nationality:userNationality,isStudent:userVerification} = Employeer;
console.log(username, userAge, userNationality,userVerification);




