const myFunction=(w,x,y,z)=>{
    console.log(w+x+y+z);

}

let args=[1,2,3];
myFunction(... args,10);

class square{
    constructor(height,widht)
    {
        this.height=height;
        this.widht=widht; 
        var result = height*widht;  
    }
}