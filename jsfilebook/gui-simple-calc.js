let value1= parseInt(document.calc.value_1.value);
let value2 = parseInt(document.calc.value_2.value);
let result = 0;

const addBtn=()=>{

    result= value1+value2;
    
    document.calc.result1.value = eval(result);
}

const subBtn=()=>{
    result = value1-value2;
    document.calc.result1.value= eval(result);
}

const multiBtn=()=>{
    result = value1 * value2;
    document.calc.result1.value= eval(result);
}

const divideBtn=()=>{
    result = value1/value2;
    document.calc.result1.value= eval(result);
}
