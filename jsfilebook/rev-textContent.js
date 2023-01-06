let date = new Date();
let hoursNow = date.getHours();
let username= prompt("Enter your name:");
let userAge = parseInt(prompt("Enter your age:"))
let userPreferences= parseInt(prompt("Enter your language prefecences"));
let languagePreferences= ["German", "Japanese", "Chinese", "English", "Korean", "Spanish"];
let showLanguage= document.getElementById("language");

let msgGreeting  = document.getElementById("user-greeting");

if(hoursNow>17){
 msgGreeting.textContent=`HI ${username}, good night! Your age is ${userAge} years old. You have choose ${languagePreferences[userPreferences]}`;
 showLanguage.textContent=`${languagePreferences[userPreferences]}`
}
else if(hoursNow>12){
    msgGreeting.textContent=`Hi ${username}, good afternoon! Your age is ${userAge}. You have chose ${languagePreferences[userPreferences]}`;
    showLanguage.textContent=`${languagePreferences[userPreferences]}`;
}
else if(hoursNow<10){
    msgGreeting.textContent=`Hi ${username}, good morning! Your age is ${username}. You have chose ${languagePreferences[userPreferences]}`;
    showLanguage.textContent= `${languagePreferences[userPreferences]}`;
}






