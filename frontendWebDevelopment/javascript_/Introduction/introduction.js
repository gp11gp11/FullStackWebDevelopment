//Java script - interpretor

//in browser =>right click=>inspect=>console=>click Enter to run, Here you can write the script and run
//alert
alert("Hello");// shows alert
alert("world");
// when you write multiple line in console it may be lost, 
// solution, click sources=> >> => snippet => create new snippet

//Data type
2+3;
alert(2+3);
typeof(23);//shows the respective type
typeof("angela")
typeof(true)

//prompt and varible
prompt("what is your name");// input, similar to input in python
var myName = "Angela";
alert(myName);
var yourName = prompt("what is your name?");
alert("My name is "+ myName + "Your name is" + yourName);
myName = "Jonny"
alert("My new name is " + myName);

//JAVASCRIPT VARIABLE EXERCISE START
//swapping 
function test(){
    var a = "3";
    var b = "8";
    
    var temp = a;
    a = b;
    b = temp;
    
    console.log("a is" +a);
    console.log("b is " +b);

}

//Naming and Naming conventions
//click and hold on reload button, To clean console or Hardclean(remove everything stored in cache)

/*Naming  variable
use camelCasing, To name variabe
variable name must began with alphabet, can use _ , must not include space in naming, letter can be used, keywords must not be used as variable names.
*/

// String concatenation
alert("hello" + "world")

//String length and Retrieving the numbers of characters

var name = "Godson";
name.length;
// program to check no of character
var total_Length = 200;
var tweet = prompt("Compose the Tweet and  character must not exceed 200");
total_Length = total_Length-tweet.length;
alert("You have written " + tweet.length + "characters, you have" + total_Length + "characters left");

//slicing and Extracting parts of string

//function slice(x,y),include x to y but does not include y

var total_Length = 200;
var tweet = prompt("Compose the Tweet and  character must not exceed 200");
total_Length = total_Length-tweet.length;

alert("You have written " + tweet.length + "characters, you have" + total_Length + "characters left");

tweet = tweet.slice(0,200);//cut your tweet to 200 characters
alert(tweet);

//Challenge : Changing Casing in text

//toUpperCase()
 
var my_Name = "Godson"
my_Name = my_Name.toUpperCase();
my_Name = my_Name.toLowerCase();

//Basic arithmetic and modular operator in javascript
6/4;
6*2;
6%4;//gives reminder
var cost = 3+5*2//BODMAS

//CHALLENGE: Dog Age to Human Age Formula

dogAge = prompt("Enter age of dog")
humanAge = (dogAge-2)*4+21;
alert(humanAge)

//Increment and Decrement Expression
var x = 5;
var y = 5;
y--;//y = y-1
x++;//x = x+1
x += y;//x = x+y
x -= y;//x = x-y

//Function part 1: Creating and Calling  Function
/*
function function_Name(){

}
*/
//command +f , to rename repeatedly used word
 
//Function part 2: Parameter and Arguments
/*
function function_Name(parameter){
 //Parameter refer to variable or identifier, Argument refer to actual value or literals
}
function_Name(argument);
*/
// math.floor(variable_Name); is used to round off down

//Life in Weeks Solution
function lifeInWeeks(age) {
    
    /*****Don't change the code above*****/    
        
        //Write your code here.
        var age_Left = 90-age;
        
        var days = age_Left*365;
        var weeks= age_Left*52;
        var months= age_Left*12;
        
        console.log("You have " + days +" days, " + weeks +" weeks, and " + months +" months left. When age is " +age);
        
        
        
    /****Don't change the code below***/
    }

//Function part 3:Outputs and Return values
/*
function function_Name(parameter){
 return return_value;
};
*/

//Challenge: Create a BMI Calculator
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight,height){
    var bmi = weight/(height*height);
    return bmi;
}



/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
