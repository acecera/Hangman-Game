var words = ['liar liar', 'Yes Man', 'Dumb and Dumber', 'The Mask', 
'Ace Ventura', 'Batman Forever'];
var dashWords = [_ _ _ _, ]
var wins = 0;
var guessesRemaining = 0;
var lettersGuessed = 0;
var winsElement = document.getElementById("words-guessed-correctly");

var chooseWord = words[Math.floor(Math.random() * words.length)];
console.log(chooseWord);
var chooseWordArray = chooseWord.split("");
// for loop     
document.onkeyup = function (event) {
    var userGuess = event.key;   
    //console.log(userGuess);      
    for (var i = 0; i < chooseWordArray.length; i++){
       if(chooseWordArray[i] === userGuess) {
           console.log(userGuess);
           dashes[i] = userGuess;
       }else if(chooseWordArray[i] !== userGuess) {
           console.log("Wrong!");
       }
    }



}
