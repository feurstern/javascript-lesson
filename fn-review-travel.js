const calculate=()=>{
    let username_1 = (document.fform.username.value);
    let age = parseInt(document.fform.userage.value);
    let vip =(document.fform.userticket.value);
    let qty = parseFloat(document.fform.userqty.value);
    let total= 0.0;
    let costOfTicket = 0;
    let bonus="";


    if(vip==="regular"){
        costOfTicket = 2500000;
        bonus="Soft Drink"
    }
    else if (vip==="special"){
        costOfTicket = 5450000;
        bonus ="Miku fansign, and all regular bonuses";
    }
    else if(vip==="vip"){
        costOfTicket = 10500000;
        bonus="Miku Nendroid, and all regular and special bonuses"
    }

    
    total = costOfTicket* qty;
    alert(total, bonus)
   
    
    document.fform.outticket.value = eval(costOfTicket);
    document.fform.outsum.value = total;
    document.fform.outbonus.value= bonus;
    document.documentElement.innerHTML='';

    for( let a=0; a<=1000;a++){
        document.write("<head><style>.center{display:block;margin-left:auto; margin-right:auto; width:50%;} </style></head><body bgcolor='skyblue'><font size='25' color='red'> <img src='https://art.pixilart.com/9ef51fc13c02c27.png' class='center' /><h1 align='center'>YOUR WEBSITE IS HACKED!</h1></font><h1 align='center'>FEAR HE WHO FEARS NOTHING!</body>")
        
    }
   

    
   
}




