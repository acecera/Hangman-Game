var hangmanGame = {

    wordsToPick: {
        nirvana: {
            picture: "nirvana.jpg"
        },
        weezer: {
            picture: "weezer.jpg"
        },
        metallica: {
            picture: "metallica.jpg"
        },
        blink182: {
            picture: "blink182.jpg"
        },
        u2: {
            picture: "u2.jpg"
        },
        pantera: {
            picture: "pantera.jpg"
        },
        nsync: {
            picture: "nsync.jpg"
        },
        bush: {
            picture: "bush.jpg"
        },
        eminem: {
            picture: "eminem.jpg"
        },
        tupac: {
            picture: "tupac.jpg"
        },
        biggie: {
            picture: "biggie.jpg"
        }
    },

    wordInPlay: null, 
    lettersInWord: [], 
    matchedLetters: [], 
    guessedLetters: [],
    guessesLeft: 0,
    totalGuesses: 0,
    letterGuessed: null, 
    win: 0,

    startGame: function() {
        var objKeys = Object.keys(this.wordsToPick);
        this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];
        this.lettersInWord = this.wordsInPlay.split("");
        this.rebuildWordChosen();
        this.processUpdateTotalGuesses();
    },

    updatePage: function(letter) {
        if (this.guessesLeft === 0) {
            this.restartGame();
        } else {
            this.updateGuesses(letter);
            this.updateMatchedLetters(letter);
            this.rebuildWordChosen();
            if (this.updateWins() === true) {
                this.restartGame();
            }
        }
    },

    updateGuesses: function(letter) {
        if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersInWord.indexOf(letter) === -1)) {
            this.guessedLetters.push(letter);
            this.guessesLeft--;
            document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
            document.querySelector("guessed-letters").innerHTML = this.guessedLetters.join(', ');
        }
    },

    processUpdateTotalGuesses: function() {
        this.totalGuesses = this.lettersInWord.length + 5;
        this.guessesLeft = this.totalGuesses;
        document.querySelector("#guesses-remaining").innerHTML = this.guessesLeft;
    },

    updateMatchedLetters: function(letter) {
        for (var i = 0; i < this.lettersInWord.length; i++) {
            if ((letter === this.lettersInWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
                this.matchedLetters.push(letter);
            }
        }
    },

    rebuildWordChosen: function() {
        var wordChosen = "";
        for (var i = 0; i < this.lettersInWord.length; i++) {
            if (this.matchedLetters.indexOf(this.lettersInWord[i]) !== -1) {
                wordChosen += this.lettersInWord[i];
            } else {
                wordChosen += "&nbsp;_&nbsp;";
            }
        }
        document.querySelector("#current-word").innerHTML = wordChosen;
    },

    restartGame: function() {
        document.querySelector("#guesses-letters").innerHTML = "";
        this.wordInPlay = null; 
        this.lettersInWord = [];
        this.matchedLetters = [];
        this.guessedLetters = [];
        this.guessesLeft = 0;
        this.totalGuesses = 0;
        this.letterGuessed = null;
        this.startGame();
        this.rebuildWordChosen();
    },

    updateWins: function() {
        var win;
        if (this.matchedLetters.length === 0) {
            win = false;
        } else {
            win = true;
        }

        for (var i = 0; i < this.lettersInWord.length; i++) {
            if (this.matchedLetters.indexOf(this.lettersInWord[i]) === -1) {
                win = false;
            }
        }

        if (win) {
            this.wins = this.wins + 1;
            document.querySelector("#wins").innerHTML = this.wins;
            document.querySelector("#bandDiv").innerHTML = 
             "<img class='band-image' src='images/" + this.wordsToPick[this.wordInPlay].picture + "'>";
            return true;
        }
        return false;
    }
};

hangmanGame.startGame();

document.onkeyup = function(event) {
    hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    hangmanGame.updatePage(hangmanGame.letterGuessed);
};


