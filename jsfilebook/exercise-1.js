alert("Welcome to Online Travel Ordering Ticket");
let userName =(document.travel.username.value);
let userDestination=(document.travel.userdestination.value);
let userClass=(document.travel.userclass.value);
let userQty = parseFloat(document.travel.userqty.value);
let userPrice = 0.0;
let userSub = 0.0;
let discount = 0;
let totalPrice = 0.0;
alert(`Destination: ${userDestination}, class : ${userClass}`);


const calc=()=>{
    if(userDestination=="Jakarta" || userClass=="Executive"){
        userPrice=70000;
        userSub= userPrice * userQty;
    }
    else if (userDestination=="Jakarta" && userClass=="Business"){
        userPrice = 400000;
        userSub = userPrice * userQty;
    }
    else if(userDestination=="Jakarta"&& userClass=="Economy"){
        userPrice = 100000;
        userSub = userPrice * userQty;
    }
    else if(userDestination=="Solo" && userClass=="Executive"){
        userPrice = 800000;
        userSub = userPrice * userQty;
    }
    else if(userDestination=="Solo" && userClass=="Business"){
        userPrice= 500000;
        userSub = userPrice * userQty
    }
    else if(userDestination =="Solo" && userClass=="Economy"){
        userPrice = 200000;
        userSub = userPrice * userQty
    }
    else if(userDestination=="Surabaya" && userClass=="Executive"){
        userPrice = 900000;
        userSub = userPrice * userQty;
    }
    else if(userDestination=="Surabaya" && userClass=='Business'){
        userPrice = 600000;
        userSub = userPrice * userQty;
    }
    else if(userDestination=="Surabaya" && userClass=="Economy"){
        userPrice = 300000;
        userSub = userPrice * userQty;
    }
    else{
        alert("Error!");
    }

    if(document.travel.usermember.checked == true){
        discount = sub*0.10;
    }
    else{
        discount=0.0;
    }
    total = sub-discount;
    alert(total);

    document.travel.userprice.value = eval(userPrice);
    document.travel.usersub.value= eval(userSub);
    document.travel.userdiscount.value = eval(discount);
    document.travel.usertotal.value= eval(total);
    
}