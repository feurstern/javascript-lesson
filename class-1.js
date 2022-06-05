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
}

class customer extends userProfile{

}

const user = new userProfile("Rio",23, "Bekasi West Java");


user.info();

const customer1 = new customer("Wafa ", 18, "Medan Satria, North Bekasi");

customer1.info();
