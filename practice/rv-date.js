let today = new Date();
let hourToday = today.getHours();
let price =5;
let userage=parseInt(prompt("Enter your age:"));
let username = prompt("enter your name");
let greeting = '<h1>Welcome to my website!</h1>';
let languagePreferences = ["English", "Japanese", "Germany"];

// making an array for language prefences, and printed each languages


let userPreferences = document.getElementById('language');

for(let i=0; i<=languagePreferences.length;i++){
    userPreferences.textContent = languagePreferences[i];
}

let hours =  document.getElementById('hour');
hours.textContent= "You are currently login at ",hourToday;

let cost = document.getElementById('cost');
cost.textContent = "The price is " + price;

let showusername = document.getElementById('username');
showusername.textContent = "Hello, " + username;

let showGreeting =document.getElementById('greeting');
showGreeting.innerHTML = greeting;
let isAllowed = document.getElementById('userage1');

if(userage<10){
    isAllowed.textContent ="Sorry, you can not watch the movie!";
}
else{
    isAllowed.textContent = "You can watch the movie, enjoy it!";
}

