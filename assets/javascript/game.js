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
var charLib = ["joyce", "jim", "mike", "eleven", "dustin", "lucas", "will"]
//console logging characther variables
console.log (charLib);

//Empty array of variables to store Guesschosen letters

var compGuess = "";
var compGuessWordLength = [];
var blanks = 0;
var blanksandCorrectCompGuess = [];
var wrongCompGuess= [];


//Computer Decides Who is the Winner or the Loser thru counter variable//

var wins = 0;
var losses = 0;
var guessesRemaining = 4; 


//Start of Game Function//
// Rules of the game and Show Players Progress thru these variables//
function gameStart() {
// computer generates random word from charLib array
var compGuess = charLib[Math.floor(Math.random() * charLib.length)]; 
console.log (compGuess)
// stores lenght of characthers
var compGuessWordLength = compGuess.length;
console.log(compGuess)
// computer split the individual characthers and store in new array
var compGuessLetters = compGuess.split("");
console.log(compGuessLetters)
// computer limits the guess attempts to 4 wrong characthers only
var compGuessAttempts = compGuess.length + 4;
var displayUnderline = [compGuessWordLength];
var compGuessLetter = "";
var win = compGuessWordLength;
var guessKeys = [];
var guessRepeatTest="";


//This is to create a loop in order to generate underline for each letter stored in compGuessWordLength

for (i = 0; i < compGuessWordLength; i++) {
    displayUnderline[i] = "_";
    output = output + displayUnderline[i];

}
console.log(charLib); 
console.log(compGuess)

}




//Show Players their Progress and Game Status//

//document.getElementbyId("#Wins").textContent = wins;
//document.getElementbyId("#Losses").textContent = looses;
//document.getElementbyId("#Guess_Left").textContent = "You have " + userGuessAttempts + "Attempts";
//document.getElementbyId("#guess_output").textContent = output;
//document.onkeydown = function (event) {

// // 
//     var output ="";
//     var userGuessLetter = event.key;
//     userKeys = userKeys + userGuessLetter + ", ";
//     document.getElementbyId ("guess_Entry").textContent = userKeys;
// for (s = 0; s < compGuessWordLength; s++) {
//     if (userGuessLetter.toLowerCase() ===compGuessLetters[s])
//     displayUnderline[s] = userGuessLetter.toLowerCase();
//     win--;
// }
// output = output + displayUnderline[s] + " ";
// document.getElementbyId ("#user_output").textContent = output;







// //Shows photos when guess guessed the right characther //

// userGuessAttempts--;
// if (win < 1) {

//     document.getElementbyId("Guess_Left").textContent = "You Win!";
//     wins++;
//     document.getElementbyId("#Wins").
//     HTML = wins;

//     var imageShow = output;
//     switch (imageShow) {
//         case " j o y c e ":
//         document.getElementbyId("#word_image").src="assets/images/joyce.jpg";
//         document.getElementbyId("#word_music").src="assets/sounds/you can talk to me.mp3";
//         break;

//         case " j i m ":
//         document.getElementbyId("#word_image").src="assets/images/jim.jpg";
//         document.getElementbyId("#word_music").src="assets/sounds/friendship.mp3";
//         break;

//         case " m i k e ":
//         document.getElementbyId("#word_image").src="assets/images/mike.jpg";
//         document.getElementbyId("word_music").src="assets/sounds/lay-z-boy.mp3";
//         break;

//         case " e l e v e n":
//         document.getElementbyId("#word_image").src="assets/images/eleven.jpg";
//         document.getElementbyId("#word_music").src="assets/sounds/eleven.mp3"
//         break;

//         case " d u s t i n ":
//         document.getElementbyId("#word_image").src="assets/images/dustin.jpg";
//         document.getElementbyId("#word_music").src="assets/sounds/kids.mp3";
//         break;

//         case " l u c a s":
//         document.getElementbyId("#word_image").src="assets/images/lucas.jpg";
//         document.getElementbyId("#word_music").src="assets/sounds/a kiss.mp3";
//         break;

//         case " w i l l ":
//         document.getElementbyId("word_image").src="assets/images/will.jpg";
//         document.getElementbyId("word_music").src="assets/sounds/nancy and barb.mp3";
//         break;
//     }

// // Update answerArray and remaining letters for every wrong guess //    

// } else if (userGuessAttempts < 1) {
//     document.getElementbyId("#Guess_Left").textContent = "You loose!" + "Your answer was " + compGuess.toUpperCase();
//     looses++;
//     document.getElementbyId("#Looses").innerHTML = looses;
// }
// else {
//     document.getElementbyId("#Guess_Left").textContent = "You have" + userGuessAttempts + "Guessess Left!";
// }



// //Function to Reset Game

// function myContinue () {
//     gameStart ();
//     output="";
//     userKeys="";
//     };

// function myPlayAgain() {
//     location.reload();
//     gameStart();
// };











