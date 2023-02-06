
let presidentName = ["Seokarno", "Soeharto", "Habibie", "Gusdur","Megawati",23,"SBY", "Jokowi"];
console.log(presidentName); 


presidentName[7]="Adolf Hitler";

let random = Math.floor(Math.random()* presidentName.length);
let random1 = Math.random();
console.log(random1);
console.log(`Our president is ${presidentName[random]}`); 


console.log(presidentName); 
console.log(`The length of the array is ${presidentName.length}`);




for(let i=1;i<=presidentName.length;i++){
    console.log(`President ${i+1}:${presidentName[i]}`)
}