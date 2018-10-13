// Things to do for this word guessing game //
// Always remember to code 1 piece at a time //
// When in doubt, or this assignment gives you a terrible headache, go for a walk, exercise, or sleep //
// Always remind yourself to breath and write to do's every after work so that you will remember what to do next and at the same try coding 1 piece at at time//
/* The Characther of Stranger Things:
1. Joyce
2. Jim
3. Mike
4. Eleven
5. Dustin
6. Lucas
7. Will
*/


// On clicking Stranger Things Theme Song//



//Computer Decides Who is the Winner or the Loser thru counter variables//

var wins = 0;
var looses =0;

window.wins = wins;
window.losses = losses;



//Random names of characthers //

var guessStart = function () {
var charLib = ["Joyce", "Jim", "Mike", "Eleven", "Dustin", "Lucas", "Will" ];
}



//Game Start Function//

gamStart();

function myContinue () {
    gameStart ();
    output="";
    userKeys="";
    };

function myPlayAgain() {
    location.reload();
    gameStart();
};




// Rules of the game and Show Players Progress//

var compPick = charLib;
var compGuess = compPick[Math.floor(Math.random() * compPick.length)];
var compGuessWordLength = compGuess.length;
var compGuessLetters = compGuess.split("");
var userGuessAttempts = compGuess.length + 4;
var displayUnderline = [compGuessWordLength];
var userGuessLetter = "";
var output = "";
var win = compGuessWordLength;
var userKeys = [];
var userRepeatTest="";


for (i = 0; i < compGuessWordLength; i++) {
    displayUnderline[i] = "_ ";
    output = output + displayUnderline[i];

};


//Show Players their Progress and Game Status//

document.querySelector("#Wins").textContent = wins;
document.querySelector("#Losses").textContent = looses;
document.querySelector("#Guess_Left").textContent = "You have " + userGuessAttempts + "Attempts";
document.querySelector("#user_output").textContent = output;
document.onkeydown = function (event) {

    var output ="";
    var userGuessLetter = event.key;
    userKeys = userKeys + userGuessLetter + ", ";
    document.querySelector ("user_Entry").textContent = userKeys;
for (s = 0; s < compGuessWordLength; s++) {
    if (userGuessLetter.toLowerCase() ===compGuessLetters[s])
    displayUnderline[s] = userGuessLetter.toLowerCase();
    win--;
}
output = output + displayUnderline[s] + " ";
document.querySelector ("#user_output").textContent = output;

}

//Shows photos when guess guessed the right characther //

userGuessAttempts--;
if (win <1) {

    document.querySelector("Guess_Left").textContent = "You Win!";
    wins++;
    document.querySelector("#Wins").innerHTML = wins;

    var imageShow = output;
    switch (imageShow) {
        case " j o y c e ":
        document.querySelector("#word_image").src="assets/images/joyce.jpg";
        document.querySelector("#word_music").src="assets/sounds/you can talk to me.mp3";
        break;

        case " j i m ":
        document.querySelector("#word_image").src="assets/images/jim.jpg";
        document.querySelector("#word_music").src="assets/sounds/friendship.mp3";
        break;

        case " m i k e ":
        document.querySelector("#word_image").src="assets/images/mike.jpg";
        document.querySelector("word_music").src="assets/sounds/lay-z-boy.mp3";
        break;

        case " e l e v e n":
        document.querySelector("#word_image").src="assets/images/eleven.jpg";
        document.querySelector("#word_music").src="assets/sounds/eleven.mp3"
        break;

        case " d u s t i n ":
        document.querySelector("#word_image").src="assets/images/dustin.jpg";
        document.querySelector("#word_music").src="assets/sounds/kids.mp3";
        break;

        case " l u c a s":
        document.querySelector("#word_image").src="assets/images/lucas.jpg";
        document.querySelector("#word_music").src="assets/sounds/a kiss.mp3";
        break;

        case " w i l l ":
        document.querySelector("word_image").src="assets/images/will.jpg";
        document.querySelector("word_music").src="assets/sounds/nancy and barb.,p3";
        break;
    }

// Update answerArray and remaining letters for every wrong guess //    
} else if (userGuessAttempts < 1) {
    document.querySelector("#Guess_Left").textContent = "You loose!" + "Your answer was " + compGuess.toUpperCase();
    looses++;
    document.querySelector("#Looses").innerHTML = looses;
}
else {
    document.querySelector("#Guess_Left").textContent = "You have" + userGuessAttempts + "Guessess Left!";
}
};

}

















