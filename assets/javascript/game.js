// //HangMan Game
//
// prompt('Shall we play a game?');
//
// // List of Global Variables
//
// var a;
// var count = 0;
// var blankArray =[];
//
// //Array of words to choose from
//
// var arrayOfWords = ['cow', 'maddona', 'hangman', 'orange', 'cauliflower', 'youtube']
//
// // Choosing a random word
//
// var wordChosen = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
//
// function startGame() {
//   for (var i = 0; i < arrayOfWords.length; i++) {
//     blankArray = "_";
//   }
//   a = blankArray.join(" ");
//   a = document.getElementById("answer").innerHTML;
// }
//
//
// //function to display the letters guessed
//  // document.onkeyup = function () {
//  // 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//  // 	console.log(userGuess)
//  // }
//
// // function to replace each blank with a letter when guessed
//
// function letter() {
//   var letter = document.getElementById("letter").value;
//  if (letter.length > 0) {
//    for (var i = 0; i < wordChosen.length; i++) {
//      if(wordChosen[i] === letter) {
//        blankArray[i] = letter;
//      }
//    }
//  }
//  count++;
//  document.getElementById("guesses").innerHTML = "Guesses :" + count;
//  document.getElementById("answer").innerHTML = blankArray.join(" ");
//   }
// }
//
//
// // Counter for wins and loses
// function counterUp() {
//    count+=1
//    return count
// }
// // documentGetElementById wins = "Wins :" + count
// function counterDown() {
//   count -=1;
//   return count;
// }
// // documentGetElementById wins = "Guesses :" + count
// //function to display the number of guesses counting down
// var startingGuesses = 15;
// function numberofGuesses() {
//   letter();
//   counterDown();
// }

//============================================================================

// Globalvariables

var arrayOfWords = ['cow', 'canoe', 'tiger', 'dog'];
var selectedWord ='';
var lettersInWord = [];
var numBlanks = 0;
var blanksAndGuesses =[];
var wrongLetters = [];

//GameCounters
var winsCount = 0;
var losecount = 0;
var guessesLeft = 9;

//FunctionsNeeded
function startGame() {
  selectedWord = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
  lettersInWord = selectedWord.split('');
  numBlanks = lettersInWord.length;

  guessesLeft = 9;
  wrongLetters =[];
  blanksAndGuesses =[];

  for (var i = 0; i < numBlanks; i++) {
    blanksAndGuesses.push('_');
  }
  // document.getElementById("wordToGuess").innerHTML = blanksAndGuesses.join(' ');
  document.getElementById('numGuesses').innerHTML = guessesLeft;
  document.getElementById('winCounter').innerHTML = winsCount;
  document.getElementById('lossCounter').innerHTML = loseCount;

  function checkLetters(letter) {

    var isLetterInWord = false;
    for (var i = 0; i < numBlanks.length; i++) {
      if (selectedWord[i] === letter) {
        isLetterInWord = true;
      }
    }

    if(isLetterInWord) {
    for (var i = 0; i < numBlanks.length; i++) {
      if (slectedWord[i] === letter) {
        blanksAndGuesses[i] === letter;
      }
    }
  }
    else {
      wrongLetters.push(letter);
      numGuesses--
    }
}
function roundComplete () {
  console.log("Win Count:" + winCount + " | Loss Count: " + lossCount + "| Guesses Left")
 document.getElementById("numGuesses").innerHTML = guessLeft;
 document.getElementById("wordToGuess").innerHTML = blanksAndGuesses.toString();
 document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
  if (lettersinWord.toString() === blanksAndGuesses.toString()) {
    winCount++;
    alert("You Won!");
    document.getElementById("winCounter").innerHTML = winsCount;
    startGame();
  } else if (guessesLeft === 0) {
    lossCount++;
    alert("You Lost");
    document.getElementById("lossCounter").innerHTML = lossCount;
    startGame();
  }
}

}

//Starting the Game

startGame();

document.onkeyup = function (event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();
}
