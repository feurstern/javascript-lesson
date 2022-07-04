const employee={
name:"rio",
division:"Software Engineer",
marital_status : "Married",
age: 23
};

console.log(employee.name);

employee.name="Miku";

console.log(employee.name);


let userProfile= ["Hatsune Miku", 23, "Japan"];
let userAge =[24,30,50,20];

let userDetails = [userProfile,userAge];

let userDetails2 =[...userProfile, ...userAge];
console.log('The contains is:', userDetails);
console.log('The contains is:', userDetails2);

console.log(userProfile[1]);

for(let i =0; i<=userProfile.length;i++){
    console.log(userProfile[i]);
    
}

userProfile.push("Nazisme");
userProfile.shift("Rio Kurniawan");

for(let z =0; z<=userProfile.length;z++){
    console.log(userProfile[z]);
    
}
