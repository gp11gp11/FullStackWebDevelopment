/*
var arr = [];
arr.push(1);
arr.pop();
alert(arr);
*/

var arr = [];

var count = 0;

function fizzBizz() {
    count += 1;
   

    if (count%3==0){
        arr.push("fizz");
    }else if(count%5==0){
        arr.push("bizz");
    }else {
         arr.push(count);
    }

    console.log(arr);
    
    
}

