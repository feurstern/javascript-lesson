import userProfile from "./class-1";
class Rectangle{
    constructor(height,widht){
        this.height= height;
        this.widht = widht;
    }

    getArea(){
        return this.calcArea();
    }
    calcArea(){
        return this.height * this.widht;
    }

};

const square= new Rectangle(10,5);
console.log(square);

const profile= new userProfile("MUhhamad Rio",23,"Jakarta", "handsome");

profile.info();

