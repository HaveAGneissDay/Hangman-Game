//HangMan Game

prompt('Shall we play a game?');

// List of Global Variables

var a;
var count = 0;
var blankArray =[];

//Array of words to choose from

var arrayOfWords = ['cow', 'maddona', 'hangman', 'orange', 'cauliflower', 'youtube']

// Choosing a random word

var wordChosen = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];

function startGame() {
  for (var i = 0; i < arrayOfWords.length; i++) {
    blankArray = "_";
  }
  a = blankArray.join(" ");
  a = document.getElementById("answer").innerHTML;
}


//function to display the letters guessed
 // document.onkeyup = function () {
 // 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
 // 	console.log(userGuess)
 // }

// function to replace each blank with a letter when guessed

function letter() {
  var letter = document.getElementById("letter").value;
 if (letter.length > 0) {
   for (var i = 0; i < wordChosen.length; i++) {
     if(wordChosen[i] === letter) {
       blankArray[i] = letter;
     }
   }
 }
 count++;
 document.getElementById("guesses").innerHTML = "Guesses :" + count;
 document.getElementById("answer").innerHTML = blankArray.join(" ");
  }
}


// Counter for wins and loses
function counterUp() {
   count+=1
   return count
}
// documentGetElementById wins = "Wins :" + count
function counterDown() {
  count -=1;
  return count;
}
// documentGetElementById wins = "Guesses :" + count
//function to display the number of guesses counting down
var startingGuesses = 15;
function numberofGuesses() {
  letter();
  counterDown();
}
