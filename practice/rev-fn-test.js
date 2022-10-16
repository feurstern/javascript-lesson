function multipy(x,z){ //parametes of x and z , parameters is defined variable of the function
    return x *z;
}

let a = multipy(4,5); // argument of 4 and 5 for x and z, argument is the value or the expression that insert to the function in order to get an output.

console.log(a);


const userGreeting=(name,language)=>{
    if(language=="EN"){
        return `Good morning ${name}!`;
    }
    else if(language=="JP"){
        return `Konnichiwa ${name}!`
    }
    else{
        return "erorr"
    }
}

console.log(userGreeting("Rio", "EN"));
console.log(userGreeting("Rio", "de"));