function userGreeting(name){ //name is paramater
    return "Hi" +name; 
}

console.log(userGreeting("rio")) ///rio is expression


/* if the parameter is object. you can use destructing object

*/

const employeer={
    id:1,
    fullName:"Hatsune Miku",
    department: "IT Consultant",
}

const introduction=({fullName,department})=>{
    console.log(`${fullName}, ${department}`);

}   

introduction();


fe