
function scoreChecker(score) {
    let result;
    
  
  
    if(score>=90){
       result ="Selamat! Anda mendapatkan nilai A.";
       console.log(result);
     }
     else if(score>=80){
       result = "Anda mendapatkan nilai B.";
       console.log(result)  ;
     }
     else if(score>=70){
         result = "Anda mendapatkan nilai C";
         console.log(result);
     }
     
     else if(score>=60){
       result ="Anda mendapatkan nilai D.";
       console.log(result);
   }
     else{
     result= "Anda mendapatkan nilai E.";
     console.log(result);
   }
  return result;
}
const userProfile ={
    name : "Muhammad Rio Kurniawan",
    age: 12,
    hobby: "Playing video game"
};

console.log(userProfile);

scoreChecker(79);
scoreChecker(80);
scoreChecker(69);
scoreChecker(50);


  