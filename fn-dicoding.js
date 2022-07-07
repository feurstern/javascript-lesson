const minimal=(a,b)=>{
    if(a>b){
         console.log(b);
    }

    else if(a<b){
        console.log(a);
    }
    else{
        console.log(a);
    }
}

const power=(a,b)=>{
    return a**b;
}


minimal(10,10)

minimal(1,4)

minimal(4,2)

console.log(power(2,5));

function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
            for (value of arrayOfNumbers) {
                if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 7  ,1]);   

  