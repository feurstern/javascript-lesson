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
    let desc = "";
    let name = (document.fform.username.value);
    let classs = (document.fform.userclass.value);
    let age = parseInt(document.fform.userage.value);
    let nationality = (document.fform.ntn.value);

    finalScore =(0.10 * quiz) + (0.20 * assignment) + (0.30*midtest) + (0.40*finalexam);

    if(finalScore>=90){
        
        desc= "You passed the test, you got A!";
        alert(`Hi ${name}! From class ${classs}`);
    }

    else if (finalScore>=75){
        desc="You passed the test, you got B!";
        alert(`Hi ${name}! From class ${classs}`);  
    }

    else if(finalScore>=55){
        desc="You failed! You got C!"
        alert(`Hi ${name}! From class ${classs}`);
    }

    else if(finalScore>=40){
        desc="You failed! You got D!";
        alert(`Hi ${name}! From class ${classs}`);
    }
    else if(finalScore<=20){
        desc="You failed! You got E!"
        alert(`Hi ${name}! From class ${classs}`);

    }

    if(age>=7){
        alert(`Hi ${name}! You still too young`);
    }

    else if(age>=11){

        alert(`Hi ${name}! You are teenager`);
    }

    else if(age>23){
        alert(`Hi ${name}! You are adult!`)
    }
    else{
        alert(`alert ${name}! You are old!`);
    }


    document.fform.outputscore.value = finalScore;
    document.fform.outputdesc.value = desc;


    alert(`${finalScore} ${desc}`)  
}   