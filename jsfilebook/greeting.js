let today = new Date();
let hoursNow = today.getHours();
let secondNow = today.getSeconds();
let greeting= "";
let userAge = prompt("Enter your age:");
let msgAgeValidation="";

if (userAge>=17){
    msgAgeValidation="You can enter the website";
    
}
if(userAge<17){
    msgAgeValidation="You are not allowed to access this website";
}

if(hoursNow>18){
    greeting="Good Evening!";
}

else if(hoursNow>12){
    greeting="Good Afternoon!";
}

else if(hoursNow>0){
    greeting="Good Morning!";
}

document.write(`<h2>${greeting}</h2><br><h2>${msgAgeValidation}</h2>`);