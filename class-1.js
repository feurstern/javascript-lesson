class userProfile{
    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    greet(){
        console.log(`Hello ${this.name}`);
        
    }   

    info(){
        this.greet();
        console.log(`Your name is ${this.name} and your age is ${this.age}`);
        console.log(`You lived in ${this.address}`);
    }

    ageCalulcation(){
        if(this.age<=17){
            console.log("You're tenageer");
        }

        else if (this.age<=25 && this.age>=40){
            console.log("You're adult");
        }
        else{
            console.log( "You are old!");
        }
    }
}

class customer extends userProfile{
    constructor(name,age,address, type){
    super(name,age);
    this.type = type;
    }

    info(){
        this.greet
        console.log(`You are ${this.type}`);
    }
    
}

const user = new userProfile("M Rio Kurnaiwan", 33, "Jl. Pulo sirih utara 4 blok dd 110", "Myhusbad");
user.info();
user.ageCalulcation();

const customer1 = new customer("Wafa Zabira", 18, "Medan Satria", "my wife");
customer1.info();
user.ageCalulcation();

