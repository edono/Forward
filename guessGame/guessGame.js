var correctGuess;
var currentGuess;
var totalGuesses = 0;

function setCorrectGuess() {
  currentGuess = document.getElementById("guess").value;
  if (totalGuesses == -1 && currentGuess != correctGuess) {
    reset();
  }
  if (document.getElementById("playerText").textContent == "Player 1 input a number for Player 2 to guess:" && currentGuess != 0) {

    correctGuess = document.getElementById("guess").value;
    document.getElementById("playerText").textContent = "Player Two Enter a Guess";
    document.getElementById("resultsText").textContent = "";
  } else if (document.getElementById("playerText").textContent == "Player Two Enter a Guess") {
    if (currentGuess > correctGuess) {
      document.getElementById("resultsText").textContent = "Your guess is too high";
      totalGuesses++;
      clearGuess()
    } else if (currentGuess < correctGuess) {
      document.getElementById("resultsText").textContent = "Your guess is too low";
      totalGuesses++;
      clearGuess()
    } else if (currentGuess == correctGuess) {
      ++totalGuesses;
      document.getElementById("resultsText").textContent = "Click on Enter to play again";
      document.getElementById("playerText").textContent = "Your guess is correct it took you " + totalGuesses + " guesses";
      totalGuesses = -1;
      clearGuess()
    }
  }
}

function reset() {
  document.getElementById("playerText").textContent = "Player 1 input a number for Player 2 to guess:";
  document.getElementById("resultsText").textContent = "";
  totalGuesses = 0;
}

function clearGuess() {
  if (guess.value !== "")
    guess.value = "";
}
