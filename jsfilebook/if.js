alert("Hello!")
let userMathScore = parseFloat(document.cd.mathscore.value);
let userEnglishScore = parseFloat(document.cd.engscore.value);
let userScienceScore = parseFloat(document.cd.scscore.value);

let userResult = (userMathScore+userEnglishScore+userScienceScore)/3;
let message ="";
const calc=()=>{
    

    if(userResult>=90){
        message=`Your final score is ${userResult}. You got A!`

    }

    else if(userResult>=80){
        message=`Your final score is ${userResult}. You got B!`
    }

    else if(userResult>=70){
        message = `Your final score is ${userResult}. You got C!`;
    }
    else{
        message =`Your final score is ${userResult}. You failed the test!`;
    }

    document.dc.result.value=eval(userResult)
    alert(message);

}