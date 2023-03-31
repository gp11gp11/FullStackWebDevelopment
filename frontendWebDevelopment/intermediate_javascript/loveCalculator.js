//Random number generator

/*var n = Math.random();
  n = n*6
  n = Math.floor(n) + 1;
  console.log(n);
*/

name = prompt("Enter your Name");
partnerName = prompt("Enter partners name");

var loveScore = Math.random();
loveScore = loveScore*100;
loveScore = Math.floor(loveScore)+1;
alert("your love score is " + loveScore + "%");

//controlstatement

/*if (track == "clear"){
    gostraight();
   } else {
    turnright();} 
*/

name = prompt("Enter your Name");
partnerName = prompt("Enter partners name");

var loveScore = Math.random();
loveScore = loveScore*100;
loveScore = Math.floor(loveScore)+1;

if (loveScore == 100){
    alert("your love score is " + loveScore + "%." + "both of you are made for each other");
}else{
    alert("your love score is " + loveScore + "%");
}

//comparator and equality
// a===b not only check for equality but also whether data type are equal

//combining comparators


name = prompt("Enter your Name");
partnerName = prompt("Enter partners name");

var loveScore = Math.random();
loveScore = loveScore*100;
loveScore = Math.floor(loveScore)+1;

if (loveScore>=80 && loveScore <= 100){
    alert("your love score is " + loveScore + "%." + "both of you are made for each other");
}
if(loveScore>0){
    alert("your love score is " + loveScore + "%");
}