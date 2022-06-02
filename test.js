//Array in Javascript

//basic array
var userLanguage = new Array("German", "Vietnamese", "English", "Japanese");
console.log(userLanguage[2]);


//changing the defined array vallue
/*Defined array value */
var favouriteCountry = new Array("UK","Germany","South KOREA");
console.log("Before the cahanging",favouriteCountry[2]);
/* After changing*/
favouriteCountry[2]="Japan";
console.log(favouriteCountry[2]);

//Combining two different array
var userPrefernces = userLanguage.concat(favouriteCountry);
console.log(userPrefernces);

//associate array
var userProfile=[];
userProfile["name"]="Hatsune Miku";
userProfile["address"]="Tokyo";
userProfile["age"]=13;

console.log(userProfile);

