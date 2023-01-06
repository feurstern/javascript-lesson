let username = prompt("Enter your name:");
let items = ["Miku Nendroid", "Sayaka Nendroid ", "Ayumi Hamasaki"];
let userChoice = parseInt(prompt("Enter your choice item [0-2]"));
let userQty = parseInt(prompt("Enter the amount item:"));
let price =0;
let totalPrice =0

let showPrice = document.getElementById("price");ee

if(userChoice=0){
    price = 2500;
    totalPrice= userQty*price;

    showPrice.textContent=`Hi ${username}! You have order ${items[userChoice]} with ${userQty} packages. The total price is $ ${totalPrice}`;
    
}
else if (userChoice=1){
    price= 4500;
    totalPrice= userQty* price;
    showPrice.textContent= `Hi ${username}You have order ${items[userChoice]} with ${userQty} packages. The total price is $ ${totalPrice}`;
}

else if(userChoice=2){
    price = 1750;
    totalPrice = userQty * price;
    
    showPrice.textContent=`Hi ${username}You have order ${items[userQty]} with ${userQty} packages. The total prices is $ ${totalPrice}`;
}
else {
    showPrice.textContent=`Sorry you have enter the wrong command!`;
}

