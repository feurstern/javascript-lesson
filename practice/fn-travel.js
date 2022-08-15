function calculation(){

    let name =(document.ffrom.username.value);
    let destination =(document.ffrom.userdestination.value);
    let qty = parseFloat(document.ffrom.userqty.value);
    let email = (document.ffrom.useremail.value);
    let costTicket = 0;
    let total =0;
    let discount = 0;
    let finalTotal=0;

    if(destination ==="jp"){
        costTicket = 2500000;
    }
    else if(destination ==="tr"){
        costTicket= 3750000;
    }
    else if (destination ==="nz"){
        costTicket = 1750000;
    }
    else if(destination === "kr"){
        costTicket = 2200000;
    }

    else{
        costTicket = 4500000;
    }

    total = costTicket * qty;

    if(document.ffrom.usermember.checked == true){
        discount = 0.5 * total;
    }
    else{
        discount = 0;
    }


    finalTotal = total - discount;

    document.ffrom.outputticket.value=eval(costTicket);
    document.ffrom.outputtotal.value=eval(total);
    document.ffrom.outputdiscount.value=eval(discount);
    document.ffrom.outfinalcost.value= eval(finalTotal);
    alert(`Hi ${name}! The cost that you should paid is Rp.${finalTotal}`);
    alert(`We've sent the recepient into your email : ${email}`)


}