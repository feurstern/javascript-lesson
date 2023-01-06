let userName = (document.ticket1.username.value);
let userLocation = (document.ticket1.userlocation.value);
let userQty = parseFloat(document.ticket1.userqty.value);
let userVIP = (document.ticket1.vip.value);
let price =0.0;
let sub=0.0;
let discount=0.0;
let total=0.0;

const calc=()=>{
    if(userLocation=="op1"){
        price=14000;
    }
    else if(userLocation=="op2"){
        price = 25000;
    }
    else if(userLocation=="op3"){
        price=32500;
    }
    else if(userLocation=="op4"){
        price=27350;
    }
    else {
        alert("You have enter the wrong command!");

    }
    sub=price*userQty;

    if(document.ticket1.vip.checked==true){
        discount=sub*0.10;
    }

    total = sub-discount;

    document.ticket1.userprice.value=eval(price);
    document.ticket1.usersubtotal.value=eval(sub);
    document.ticket1.userdiscount.value=eval(discount);
    document.ticket1.usertotal.value=eval(total);
    alert(`Hi ${userName}! You have order ${userLocation} ticket with ${userQty}. You have to pay $ ${total}!`)

}
