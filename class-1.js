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


class employment extends userProfile{
    constructor(name,age,address,positon, salary)
    {
        super(name,age,address)
        this.positon= positon;
        this.salary = salary;
        
    }

    info(){
        this.greet();
        console.log(`You are managed to ${this.positon} department`);
        console.log(`The salary of the ${this.positon} is ${this.salary}`);
    }
}
const user = new userProfile("M Rio Kurnaiwan", 33, "Jl. Pulo sirih utara 4 blok dd 110", "Myhusbad");
user.info();
user.ageCalulcation();

const customer1 = new customer("Wafa Zabira", 18, "Medan Satria", "my wife");
customer1.info();
user.ageCalulcation();

const employeer = new employment("Rio",24,"Jl. Pulo sirih utara 4", "Programmer", 9000000);

employeer.info();   



