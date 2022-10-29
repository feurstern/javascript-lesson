//declaring map by using array
const mySchedule = new Map([
    ["Monday", "Learn Fullstack development"],
    ["Tuesday", "Learn Machine Learning/Python"],
    ["Wedneday", "Learn C++/ Math"],
    ["Thursday", " Learn Cybersecurity/Hacking"],
    ["Friday", "Learn Fullstack development"]
]);

const myLanguage = new Map([
    ["English", "Advance"],
    ["Japanese", "Intermediate"],
    ["German", "Beginner"],
    ["Chinese", "Beginner"]
])
//print the whole value of map
console.log(mySchedule);
console.log(myLanguage)

//print the size of map
console.log(mySchedule.size);

//print the key value of certain map
console.log(mySchedule.get("Friday"));
let germanlevel = myLanguage.get("German");
console.log(germanlevel);

let chineselevel = myLanguage.get("Chinese");
console.log(chineselevel);
//to add the value of the map
mySchedule.set("Saturday", "Learn Game Development");
console.log(mySchedule);

//to  check the certain of key value from map
console.log(mySchedule.has("Friday"));
let isSunday =  mySchedule.has("Sunday");
console.log(isSunday);

if(mySchedule.has("monday")){
    console.log("Monday is the problem of the day");
}
if(germanlevel==="Beginner"){
    console.log("Your German level is too low for applying hitler")
}
else{
    console.log("Welcome to fatherland!");
}

