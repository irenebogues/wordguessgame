// Things to do for this word guessing game //
// Always remember to code 1 piece at a time //
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

//Create an array of characthers
//Choose characthers randomly
//Create underscores 


//Array of characther variables
//Array of Stranger Things Characther Library
var charLib = ["joyce", "jim", "mike", "eleven", "dustin", "lucas", "will"];
//console logging characther variables
//console.log (charLib);

//Empty array of variables to store  chosen letters

//Number of user guesses
var compGuess = "";
//Lenght of characthers that user guessed
var compGuessWordLength = [];
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


//Start of Game Function/

// Rules of the game and Show Players Progress thru these variables//
function gameStart() {
// computer generates random word from charLib array
compGuess = charLib[Math.floor(Math.random() * charLib.length)]; 
//console.log (compGuess)

// computer split the individual characthers and store in new array
compGuessWordLenght = compGuess.split("");
//console.log(compGuessWordLenght)

blanks = compGuessWordLenght;


//This is to create a loop in order to generate underline for each letter stored in compGuessWordLength

for (var i = 0; i < compGuessWordLength; i++) {
    blankandCorrectCompGuess.push("_");

}


}



//Show Players their Progress and Game Status//

document.getElementbyId("#Wins").textContent = wins;
document.getElementbyId("#Losses").textContent = looses;
document.getElementbyId("#Guess_Left").textContent = "You have " + userGuessAttempts + "Attempts";
document.getElementbyId("#guess_output").textContent = output;
document.onkeydown = function (event) {

// 
    var output ="";
    var compGuessWordLength = event.key;
    userKeys = userKeys + compGuessWordLength + ", ";
    document.getElementbyId ("guess_entry").textContent = userKeys;
for (s = 0; s < compGuessWordLength; s++) {
    if (compGuessWordLength.toLowerCase() ===compGuessWordLength[s])
    displayUnderline[s] = compGuessWordLength.toLowerCase();
    win--;
}
output = output + displayUnderline[s] + " ";
document.getElementbyId ("#user_output").textContent = output;




//Shows photos when guess guessed the right characther //

userGuessAttempts--;
if (win < 1) {

    document.getElementbyId("Guess_Left").textContent = "You Win!";
    wins++;
    document.getElementbyId("#Wins").
    HTML = wins;

    var imageShow = output;
    switch (imageShow) {
        case " j o y c e ":
        document.getElementbyId("#word_image").src="assets/images/joyce.jpg";
        document.getElementbyId("#word_music").src="assets/sounds/you can talk to me.mp3";
        break;

        case " j i m ":
        document.getElementbyId("#word_image").src="assets/images/jim.jpg";
        document.getElementbyId("#word_music").src="assets/sounds/friendship.mp3";
        break;

        case " m i k e ":
        document.getElementbyId("#word_image").src="assets/images/mike.jpg";
        document.getElementbyId("word_music").src="assets/sounds/lay-z-boy.mp3";
        break;

        case " e l e v e n":
        document.getElementbyId("#word_image").src="assets/images/eleven.jpg";
        document.getElementbyId("#word_music").src="assets/sounds/eleven.mp3"
        break;

        case " d u s t i n ":
        document.getElementbyId("#word_image").src="assets/images/dustin.jpg";
        document.getElementbyId("#word_music").src="assets/sounds/kids.mp3";
        break;

        case " l u c a s":
        document.getElementbyId("#word_image").src="assets/images/lucas.jpg";
        document.getElementbyId("#word_music").src="assets/sounds/a kiss.mp3";
        break;

        case " w i l l ":
        document.getElementbyId("word_image").src="assets/images/will.jpg";
        document.getElementbyId("word_music").src="assets/sounds/nancy and barb.mp3";
        break;
    }

// Update answerArray and remaining letters for every wrong guess //    

} else if (userGuessAttempts < 1) {
    document.getElementbyId("#Guess_Left").textContent = "You loose!" + "Your answer was " + compGuess.toUpperCase();
    looses++;
    document.getElementbyId("#Looses").innerHTML = looses;
}
else {
    document.getElementbyId("#Guess_Left").textContent = "You have" + userGuessAttempts + "Guessess Left!";
}



//This function to Resets the Game

function myContinue () {
    gameStart ();
    output="";
    userKeys="";
    };

function myPlayAgain() {

    gameStart();
}
