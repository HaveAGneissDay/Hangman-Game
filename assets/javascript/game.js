//HangMan Game

//confirm('Shall we play a game?');

// List of Global Variables

var a;
var winCount = 0;
var loseCount = 0;
var blankArray =[];
var guessesLeft = 10;
var wrongGuesses =[];
var wordChosen ='';
var lettersInWord =[];
var numBlanks =0;

//Array of words to choose from

var arrayOfWords = ['cow', 'maddona', 'hangman', 'orange', 'cauliflower', 'youtube', 'brocolli']



function startGame() {
  guessesLeft = 10;
  wrongGuesses =[];
  blankArray =[];
  wordChosen = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
  lettersInWord = wordChosen.split('');
  numBlanks = lettersInWord.length;
  for (var i = 0; i < numBlanks; i++) {
    blankArray.push("_");
  }
  a = blankArray.join(' ');
  document.getElementById('wordToGuess').innerHTML = a;
   document.getElementById('numGuesses').innerHTML = guessesLeft;
   document.getElementById('winCounter').innerHTML = winCount;
   document.getElementById('lossCounter').innerHTML = loseCount;
  // console.log(wordChosen)
  // console.log(lettersInWord)
  // console.log(numBlanks)
  // console.log(blankArray)
}


//function to display the letters guessed
 document.onkeyup = function (event) {
 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//  console.log(userGuess);
  letter(userGuess);
  roundComplete();
 }

// function to replace each blank with a letter when guessed


function letter(userGuess) {
 var isLetterInWord = false;
   for (var i = 0; i < numBlanks; i++) {
     if(wordChosen[i] == userGuess) {
       isLetterInWord = true;
     }
   }

   if(isLetterInWord) {
     for (var i = 0; i < numBlanks; i++) {
       if (wordChosen[i] == userGuess) {
         blankArray[i] = userGuess;
       }
     }
   } else {
       wrongGuesses.push(userGuess);
       guessesLeft--;
     }
 document.getElementById('wordToGuess').innerHTML = blankArray.join(' ');
 document.getElementById('numGuesses').innerHTML = guessesLeft;
}

function roundComplete () {
 document.getElementById("numGuesses").innerHTML = guessesLeft;
 document.getElementById("wordToGuess").innerHTML = blankArray.join(' ');
 document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");
  if (lettersInWord.toString() == blankArray.toString()) {
    winCount++;
    alert("You Won!");
    document.getElementById("winCounter").innerHTML = winCount;
    startGame();
  } else if (guessesLeft === 0) {
    loseCount++;
    alert("You Lost");
    document.getElementById("lossCounter").innerHTML = loseCount;
    startGame();
  }
}
// Starting the Game 
startGame();
