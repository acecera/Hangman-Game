var words = ['Liar Liar', 'Yes Man', 'Dumb and Dumber', 'The Mask', 
'Ace Ventura', 'Batman Forever'];
var wins = 0;
var letters = char [] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
var guessesRemaining = 0;
var lettersGuessed = 0;
var winsElement = document.getElementById("words-guessed-correctly");

document.onkeyup = function (event) {
    var userGuess = event.key;
    var chooseWord = words[Math.floor(Math.random() * words.length)];
    console.log(chooseWord);




