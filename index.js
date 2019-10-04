//Named Function
/*document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    alert("I got clicked!");
}*/

//Most commonly written as an anonymous function instead of above
    //Function has no name and is simply placed in the listener area
        //document.querySelector("button").addEventListener("click", function (){
        //alert("I got clicked!");
        //});


// Dectecting Button Press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    });

}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key) {
        case "w":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
            
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        default: console.log(buttonInnerHTML);
            break;
    }

}


function buttonAnimation(currentKey){

    //document.querySelector(".w") --- selects class w for "w" key
        //above is below but with a variable class/key
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
