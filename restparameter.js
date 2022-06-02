// if we wanted to pass a variable of arguments to a function, we could use argument project..


const containsAll=(arr)=>{

    for (let k = 0; k<arguments.length; k++) {
        let num =arguments[k];
        if(arr.indexOf(num)===-1){
            return false;
        }        
   }
   return true;
}
let x=[2,4,15,76];
console.log(containsAll(x,2,4,76));
console.log(containsAll(x,5,7,5,6));
console.log(containsAll(x,2,4,15,76));

const userGreet=(name)=>{

    console.log("Hello", name);
}


const userProfile=(name,age,gender,nationallity)=>{
    
    
}