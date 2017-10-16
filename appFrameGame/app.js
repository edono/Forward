"use strict";

// using a function contructor form to create an object
function MyApp()
{
	var version = "v1.0";
	
	var correctGuess;
var currentGuess;
var totalGuesses = 0;
var gameReset = true;
var playerOneTurn = true;
$("#button").on("click", setCorrectGuess);

function setCorrectGuess() {
  var pt = document.getElementById("playerText");
  var rt = document.getElementById("resultsText");
  var guess = document.getElementById("guess");
  
  if(gameReset){
	  pt.textContent = "Player 1 input a number for Player 2 to guess:";
	  rt.textContent = "";
	  totalGuesses = 0;
	  gameReset = false;
	  playerOneTurn = true;
	  
  } else if (playerOneTurn) {
	  
    correctGuess = parseInt(guess.value);
    pt.textContent = "Player Two Enter a Guess";
    rt.textContent = "";
	guess.value = "";
	playerOneTurn = false;
	
  } else {
	  
		currentGuess = parseInt(guess.value);
		
		if (currentGuess > correctGuess) {
		  rt.textContent = "Your guess is too high";
		  totalGuesses++;
		  guess.value = "";
		} else if (currentGuess < correctGuess) {
		  rt.textContent = "Your guess is too low";
		  totalGuesses++;
		  guess.value = "";
		} else if (currentGuess == correctGuess) {
		  ++totalGuesses;
		  rt.textContent = "Click on Enter to play again";
		  pt.textContent = "Your guess is correct it took you " + totalGuesses + " guesses";
		  guess.value = "";
		  gameReset = true;
		}
  }
}
	
	
	
	
	// creating a private function
	function setStatus(message)
	{
		$("#app>footer").text(message);
	}

	// creating a public function
	this.start = function()
	{
		$("#app>header").append(version);
		setStatus("ready");
	};
} // end MyApp

/* 	JQuery's shorthand for the document ready event handler
		could be written: $(document).ready(handler);

		When this page loads, we'll create a global variable
		named "app" by attaching it to the "window" object
		(part of the BOM - Browser Object Model)
*/
$(function() {
	window.app = new MyApp();
	window.app.start();
});
