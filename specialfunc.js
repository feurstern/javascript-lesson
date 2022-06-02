function scope2(print) {
    var insideIf;
    if(print){
        insideIf="14";

    }
    else{
        insideIf="error";
    }
    console.log(insideIf);
    
}
let a = 12;
scope2(12);