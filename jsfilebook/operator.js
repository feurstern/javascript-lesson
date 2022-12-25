let username = prompt("Enter your name:");
let items = ["Miku Nendroid", "Sayaka Nendroid ", "Ayumi Hamasaki"];
let userChoice = parseInt(prompt("Enter your choice item [0-2]"));
let userQty = parseInt(prompt("Enter the amount item:"));
let price =0;
let totalPrice =0

let showPrice = document.getElementById("price");

if(userChoice=0){
    price = 2500;
    totalPrice= userQty*price;

    showPrice.textContent=`You have order ${items[userChoice]} with ${userQty} packages. The total price is $ ${totalPrice}`;
}

