const userGreeting=()=>{
    let today = new Date();
    let hourNow = today.getHours();
    let monthNow = today.getMonth();


    if(hourNow>=18){
        alert('Good evening user!');
    }
    else if(hourNow>12){
        alert("Good afternoon user!");
    }
    else if(hourNow>0){
        alert("Good morning user!")
    }
    else{
        alert('Welcome user!');
    }
}

function calc(){

    let quiz =parseFloat(document.fform.stdquiz.value);
    let assignment = parseFloat(document.fform.stdassignment.value);
    let midtest = parseFloat(document.fform.stdmidtest.value);
    let finalexam = parseFloat(document.fform.stdfinalexam.value);
    let finalScore = 0.0;
    let desc = ""

    finalScore =(0.10 * quiz) + (0.20 * assignment) + (0.30*midtest) + (0.40*finalexam);

    if(finalScore>=90){
        desc= "You passed the test, you got A!";
    }

    else if (finalScore>=75){
        desc="You passed the test, you got B!";
    }

    else if(finalScore>=55){
        desc="You failed! You got C!"
    }

    else if(finalScore>=40){
        desc="You failed! You got D!";
    }
    else if(finalScore<=20){
        desc="You failed! You got E!"

    }


    document.fform.outputscore.value = finalScore;
    document.fform.outputdesc.value = desc;


    alert(`${finalScore} ${desc}`)
}