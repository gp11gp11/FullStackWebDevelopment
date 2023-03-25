
// document.querySelector("button").addEventListener("click", handleClick);// (anonimous function) or document.querySelector("button").addEventListener("click", function ()  {alert("got Clicked")} );

// function handleClick() {
//     alert("got Clicked")
// }

// Added eventlistner to button to get noticed when clicked
var noOfDrumButons = document.querySelectorAll(".drum").length;

for(var i = 0; i<noOfDrumButons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function ()  {//adding eventlistner to each button
    var buttonInnerHtml = this.innerHTML;

    switch(buttonInnerHtml) {
        case "w":
            var tom1 = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/tom-2.mp3");
            tom2.play();
            break;
            
        case "s":
            var tom3 = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHtml);
    }

} );

// Added eventlistner to website to get noticed when key is pressed

    document.addEventListener("keypress", function() {
        var keyPressed = event.key;

        switch(keyPressed) {
            case "w":
                var tom1 = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/tom-2.mp3");
                tom2.play();
                break;
                
            case "s":
                var tom3 = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick = new Audio("/Volumes/external_ssd/myProjects/fullStackDevelopment/FullStackWebDevelopment/Document Object Model/Drum Kit/sounds/kick-bass.mp3");
                kick.play();
                break;
    
            default: console.log(keyPressed);
        }

    } );
    
}



// template
// $0.addEventListener(input1,input2);

// function input2(){
//     console.log("got clicked")
// }

// debugger- use to find the flow to detect error