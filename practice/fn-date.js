let today = new Date();
let hourNow = today.getHours();
let monthNow = today.getDate();
let greeting = "";
let price =5;
let itemName = prompt("Enter item name");
let quantity = parseFloat(prompt("Enter the qty of the item:"));
let total = price * quantity;
let inStock = true;

let itemstock = document.getElementById('stock');
itemstock.textContent = inStock;

let el = document.getElementById('cost');
el.textContent = "$" + total;

let item = document.getElementById('item-name');
item.textContent = itemName;

if(hourNow>=18){
    greeting= 'Good evening user!';
}
else if(hourNow>12){
    greeting = "Good afternoon user!";
}
else if(hourNow>0){
    greeting = "Good morning user!";
}
else{
    greeting = "Welcome user!";
}


document.write("<h3>" + greeting + "</h3>");
document.write("<h3>" + hourNow + "</h3>")


