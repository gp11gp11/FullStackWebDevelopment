var randomnumber1 = Math.floor(Math.random() *6)+1;

var randomImage = "dice" + randomnumber1 + ".png";

var randomImageSource = "/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Dicee /images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomnumber2 = Math.floor(Math.random() *6)+1;

var randomImageSource2 = "/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Dicee /images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if player i wins
if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML ="Player 1 wins🏆 ";
}
// if player 2 wins
else if (randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML ="🏆 Player 2 wins";
}
// if its a draw
else {
    document.querySelector("h1").innerHTML ="Draw!";
}

