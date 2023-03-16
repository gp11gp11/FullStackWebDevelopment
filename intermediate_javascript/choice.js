
function choice(names){
    var totalLength = names.length;
    var choice = Math.floor(Math.random()*totalLength);
    var personChosen = names[choice];
    console.log("The person chosen is "+ personChosen);
}

var names = ["job", "ravi", "hani"];
choice(names);