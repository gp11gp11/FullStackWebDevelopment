
function fibonacci(sequenceLen){
    var arr = [];
    var b=1;
    var a=0;
    arr.push(a);
    arr.push(b);
    for(var i = 0;i<sequenceLen;i++){
        
        if (sequenceLen == 1){
            
            return arr;
            break
        }
       
        temp = a+b ;
        
        a = b;
        b = temp;
        arr.push(temp);
        
        
    }

    return arr;
    


}

var sequenceLen = prompt("enter the sequence length");
var sequence = fibonacci(sequenceLen);
console.log(sequence);