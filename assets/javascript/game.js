var words = ['burton', 'lib-tech', 'capita', 'ride', 
'arbor', 'gnu'];
var chooseWord = words[Math.floor(Math.random() * words.length)];
var brandDiv = document.getElementsByClassName('brand')[0];
//var expectedDiv = document.getElementsByClassName('expected-brand')[0];
var dashWords = [('_', '_', '_', '_', '_', '_'), ('_','_','_', '_','_','_','_'), 
('_','_','_','_','_','_'), ('_','_','_','_'), ('_','_','_','_','_'), ('_','_','_')];
var wins = 0;
var guessesRemainingElement = document.getElementsByClassName("guessesRemaining")[6];
var lettersGuessed = [];
var winsElement = document.getElementsByClassName("words-guessed-correctly");
var chooseWordArray = chooseWord.split("");
// for loop     
document.onkeyup = function (event) {
    var userGuess = event.key;   
}     
    for (var i = 0; i < chooseWordArray.length; i++) {
       var span = document.createElement("span")
       span.textContent = '_';
       span.style = "margin-left: 5px;";
       
    }   
       if (chooseWordArray.includes(userGuess)) {
           console.log(userGuess);
       } else {
        console.log("Wrong Letter" + userGuess);
    };
             
     var wins = function () {
        if (dashWords.join("") === chooseWordArray) {
            wins = wins + 1;
            endElement.textContent = "You Win!"
        }    
    }


