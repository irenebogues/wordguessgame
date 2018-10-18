// Things to do for this word guessing game //
// Always remember to code 1 piece at a time //
// Always remind yourself to breath and write to do's every after work so that you will remember what to do next and at the same try coding 1 piece at at time//
/* The Characther of Stranger Things:
1. Joyce
2. Steve
3. Mike
4. Eleven
5. Dustin
6. Lucas
7. Will
*/

//Create an array of characthers
//Choose characthers randomly
//Create underscores 


//Array of characther variables
//Array of Stranger Things Characther Library
var charLib = ["joyce", "steve", "mike", "eleven", "dustin", "lucas", "will"];
//console logging characther variables
//console.log (charLib);

//Empty array of variables to store  chosen letters

//Number of user guesses
var compGuess = "";
//Lenght of characthers that user guessed
var compGuessWordLength = []
// Number of stored Stranger Things characthers or keys
var blanks = 0;
//Number of correct guesses 
var blankandCorrectCompGuess = [];
//Number of wrong guess
var wrongCompGuess = [];


//Computer Decides Who is the Winner or the Loser thru the counter variable//
//Number of wins of user
var wins = 0;
//Number of losses of user
var losses = 0;
//Number of guess chance of playing guessing game
var guesseslives = 4; 


//Start of Game Functions/

// Rules of the game and Show Players Progress thru these variables//
function gameStart() {
// computer generates random word from charLib array
compGuess = charLib[Math.floor(Math.random() * charLib.length)]; 

// computer split the individual characthers and store in new array

compGuessWordLength= compGuess.split("");

blanks = compGuessWordLength.length;

//This is to create a loop in order to generate underline for each letter stored in compGuessWordLength

for (var i = 0; i < compGuessWordLength; i++) {
    blankandCorrectCompGuess.push("_");

}

//Show Players their Progress and Game Status//
document.getElementById("hawkinsworld").innerHTML = "  " +
blankandCorrectCompGuess.join (" ");

}


//Shows photos and play audio when guess guessed the right characther //

var j = document.getElementById("joyce");
var steve = document.getElementById("steve");
var mike = document.getElementById("mike");
var eleven = document.getElementById("eleven");
var d = document.getElementById("dustin");
var l = document.getElementById("lucas");
var w = document.getElementById("will");

//Functions for showing audio and photos of Stranger Things Characther 

//Joyce 

if (compGuessWordLength === charLib [0]) {
    joyce.pause();
    steve.pause();
    mike.pause();
    eleven.pause();
    dustin.pause();
    lucas.pause();
    will.pause();
    e.pause();
    j.play();
    document.getElementById("image").src = ".assets/images/joyce.jpg";

}

//Steve
else if (compGuessWordLength === charLib [1]) {
    joyce.pause();
    mike.pause();
    eleven.pause();
    dustin.pause();
    lucas.pause();
    will.pause();
    e.pause();
    s.play();
    document.getElementById("image").src = ".assets/images/steve.jpg";

}


//Mike
else if (compGuessWordLength === charLib [2]) {
    joyce.pause();
    steve.pause();
    eleven.pause();
    dustin.pause();
    lucas.pause();
    will.pause();
    e.pause();
    m.play();
    document.getElementById("image").src = ".assets/images/mike.jpg";

}

//Eleven
else if (compGuessWordLength === charLib [3]) {
    joyce.pause();
    steve.pause();
    mike.pause();
    dustin.pause();
    lucas.pause();
    will.pause();
    n.pause();
    e.play();
    document.getElementById("image").src = ".assets/images/eleven.jpg";

}

//Dustin
else if (compGuessWordLength === charLib [4]) {
    joyce.pause();
    steve.pause();
    mike.pause();
    eleven.pause();
    lucas.pause();
    will.pause();
    n.pause();
    d.play();
    document.getElementById("image").src = ".assets/images/dustin.jpg";

}

//Lucas
else if (compGuessWordLength === charLib [5]) {
    joyce.pause();
    steve.pause();
    mike.pause();
    eleven.pause();
    dustin.pause();
    will.pause();
    s.pause();
    l.play();
    document.getElementById("image").src = ".assets/images/lucas.jpg";

}

//Will
else if (compGuessWordLength === charLib [6]) {
    joyce.pause();
    steve.pause();
    mike.pause();
    eleven.pause();
    dustin.pause();
    lucas.pause();
    l.pause();
    w.play();
    document.getElementById("image").src = ".assets/images/lucas.jpg";

}



function reset () {
    guesseslives = 4;
    compGuessWordLength =[];
    blankandCorrectCompGuess =[];
    gameStart()

}

//Compare Game Rules and Results


function checkStranger (stranger) {
    var strangerThings = false;
    
for (var i = 0; i < blanks; i++) {
if (compGuessWordLength [i] == stranger) {
    strangerThings = true;
    }
}

if (strangerThings) {
for (var i = 0; i < blanks; i++) {
    if (compGuessWordLength[i] == stranger) {
        blankandCorrectCompGuess [i] = stranger;
        }
    }
}

else {
    wrongCompGuess.push(stranger);
    guesseslives--;
}

}

//Final Termination of Demogorgon

function terminate (){
if (compGuessWordLength.toString () == blankandCorrectCompGuess.toString()) {
    wins++;
    Audio()
    reset()
    document.getElementById("strangerspy").innerHTML == "  " + wins;

} else if (guesseslives === 0) {
    losses++;
    reset()
    document.getElementById("image") .src = ".assets/images/sadeleven.jpg"
    document.getElementById("demospy").innerHTML = "  " + blankandCorrectCompGuess.join (" ");
    document.getElementById("guesseslives").innerHTML = " " + compGuessWordLength;
}
}

//Game Start

gameStart()
document.onkeyup = function (event) {
    var guesseslives = String.fromCharCode(event.keyCode).toLowerCase();
checkStranger (guesseslives);
terminate();

document.getElementById("playerguesses").innerHTML = " " + 
guesseslives.join (" ");
}


