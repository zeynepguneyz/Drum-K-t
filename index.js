// when we add an event listener to an element then once the event happens yhe element will trigger the function taht is in the second parameter.

//Detecting Button Press

for (i=0; i<document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
        var buttonInnerHTML = this.innerHTML; //when the button get pressed this check the innerHTML of the button that got pressed and 

        makeSound(this.innerHTML); //send that to makeSound in order to play the relevant sound.
        buttonAnimation(buttonInnerHTML);
    }
    
    );
}

//so what exactly do we add this event listener to? 
//addEventListener("keypress", function(){alert("k");})
//previously we added our event listener to all of the buttons so that buttons get pressed the event listener gets triggered.
//but in this case we kind of waiting for the keyboard keys. we dont have to add an event listener to the keyboard.
//we can add an event listener to the entire document.so that the entire web page starts listening for keyboard strokes.

//add a parameter to the function it allows to do is lets us tap into the event that triggered th eevent listener.

//Detecting Keyboard Press

document.addEventListener("keypress", function(event){
    //and if the key press detected instead then we send the event.key so the key property of the event.
    makeSound(event.key);
    buttonAnimation(event.key);
    })


    function makeSound(key){
        switch (key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
    
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
    
            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
    
            case "d":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
                    
            case "j":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
    
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
    
            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
    
            default:
                console.log(buttonInnerHTML);}
    
    }

    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey);

        activeButton.classList.add("pressed");

        setTimeout(function() {
            activeButton.classList.remove("pressed");

        },100);
    }