const myFunction = (x,w,y,z)=>{
    console.log(w+x+y+z);
}

let args =[1,2,3];
myFunction(...args,10);// the output result is 16

