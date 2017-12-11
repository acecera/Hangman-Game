var words = ['burton', 'lib-tech', 'capita', 'ride', 
'arbor', 'gnu'];
var dashWords = [('_', '_', '_', '_', '_', '_'), ('_','_','_', '_','_','_','_'), 
('_','_','_','_','_','_'), ('_','_','_','_'), ('_','_','_','_','_'), ('_','_','_')];
var wins = 0;
//var guessesRemainingElement = document.getElementById("guessesRemaining");
var lettersGuessed = [];
var winsElement = document.getElementById("words-guessed-correctly");

var chooseWord = words[Math.floor(Math.random() * words.length)];
console.log(chooseWord);
var chooseWordArray = chooseWord.split("");
// for loop     
document.onkeyup = function (event) {
    var userGuess = event.key;   
    //console.log(userGuess);      
    for (var i = 0; i < chooseWordArray.length; i++) {
       if (chooseWordArray.includes(userGuess)) {
           console.log(userGuess);
       } 
    }  
}       
       
       /*else {
           console.log("Wrong Letter" + userGuess);
       }
    } /*for (winsElement {
        if (dashWords[i] < chooseWordArray[i]) {
           console.log(winsElement++); 
        }
    }


*/
