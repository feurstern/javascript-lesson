/* 

*/



// creating countdown app

const countDown=(n)=>{
    
    //base case, the function will be stopped if the condition is fulfill 
    if(n<=0){
        return [];
    }
    else{
        let array = countDown(n-1);
        array.unshift(n);
        return array;
    }


}

console.log(countDown(100));