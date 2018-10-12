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


//Computer Decides Who is the Winner or the Loser thru counter variables//

var wins = 0;
var looses =0;



//Array of blanks where gamers can type the guess letters //



//Random names of characthers //

var guessStart = function () {
var charLib = ["Joyce", "Jim", "Mike", "Eleven", "Dustin", "Lucas", "Will" ];
}

console.log(charLib); 


//Game Start Function//

// Rules of the game and Show Players Progress//

var compPick = charLib;
var compGuess = compPick[Math.floor(Math.random() * compPick.length)];
var compGuessWordLength = compGuess.length;
var compGuessLetters = compGuess.split("");
var userGuessAttempts = compGuess.length + 5;
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




//Show Players their Progress//




//Shows photos when guess guessed the right characther //


//Take input from the players//



//Update answerArray and remaining letters for every correct guess//






