class userCharacter{
    constructor(id,password,age,server){
       

        this.id =id;
        this.password= password;
        this.age = age;
        this.server = server
    }

    InfoUser(){
        if(this.server=="CN"){
            console.log("Nihao!")
        }
        else if(this.server=="JP"){
            console.log("Konnichiwa!")
        }
        else{
            console.log("Hello there!");
        }
        console.log(`Server: ${this.server}`);
        console.log(`Age`)  
        
    }

    Annoucement(){
        if(this.age<=18){
            console.log("Hello, you will received somebuff")
        }
        else{
            console.log("You got not buff since you are minor")
        }
    }

    LastLogin(){
        var current = new Date();
       console.log(current.getHours());

    }


}

const user1 = new userCharacter("miku","hatsune",23,"JP")
const user2= new userCharacter("Rioo","123445", 19, "CN");

user1.InfoUser();
user1.LastLogin();
user2.InfoUser();