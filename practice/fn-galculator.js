
let value_1 = (document.ffrom.value1.value);
let value_2 = (document.ffrom.value2.value);
let result = 0;
const usergreeting=(name)=>{
    const date = new Date();
    const hoursNow =date.getHours();

    if(hoursNow>=6){
        alert("Welcome to my website!");
        name= prompt("Enter your name:");
        alert(`Hi ${name}! Good morning!`);

    }
    else if(hoursNow>=10){
        alert("Welcome to my website!");
        name= prompt("Enter your name:");
        alert(`Hi ${name}! Good afternoon!`);
    }
    else if(hoursNow>=15){
        alert("Welcome to my website!");
        name= prompt("Enter your name:");
        alert(`Hi ${name}! Good evening`);
    }
    else if(hoursNow>=18){
        alert("Welcome to my website!");
        name= prompt("Enter your name:");
        alert(`Hi ${name}! Good night!`);
    }
  

}

const addition=()=>{
    result=value_1+value_2;
    document.ffrom.result1.value=eval(result);
}

const subtraction=()=>{
    result=value_1-value_2;
    document.ffrom.result1.value=eval(result);
}

const division=()=>{
    result=value_1/value_2;
    document.ffrom.result1.value=eval(result);
}


const multiplication=()=>{
    result=value_1*value_2;
    document.ffrom.result1.value=eval(result);
}



