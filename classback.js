const printUsername =(name)=>{
    console.log(`Hello ${name}!`);
}

const call=(callback)=>{
    console.log("Calling back the function!");
    callback()
}

call(printUsername());
