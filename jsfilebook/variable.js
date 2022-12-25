let today = new Date();
let hoursNow = today.getHours();


let price = 20
let username = prompt("Enter your name :");
let quantity = parseInt(prompt("Enter the value of the item that you want to buy:"));
let total = price * quantity;
let userAge= parseInt(prompt("Enter your age"));
let userMsg = prompt("Enter your message here:");

let msgHours = document.getElementById("hourtoday");

if(hoursNow>18){
    msgHours.textContent=`Good evening ${username}!`;
}
else if(hoursNow>12){
    msgHours.textContent=`Good afternoon ${username}!`;
}
else if(hoursNow>0){
    msgHours.textContent=`Good morning ${username}!`
}


let showUserMsg = document.getElementById("msguser");
showUserMsg.textContent = userMsg;

let el =document.getElementById("result");
el.textContent= `The total is ${price} * ${quantity} $ ${total}`;

let msgAge = document.getElementById("msg");

if(userAge>17){
    msgAge.textContent =`<h2> Welcome to our website!</h2>`;
}
else if(userAge<17){
    msgAge.textContent=`<h2> You are not allowed to access this website!</h2>`
}
