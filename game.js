
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

var level = 0;

$(document).keypress(function() {
    if(!started) {

        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;

    }
});

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    
  // passing in the index of the last answer in the user's sequence.
    checkAnswer(userClickedPattern.length-1)
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");

        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}

function nextSequence() {
    
    //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor);

}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3" );
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}