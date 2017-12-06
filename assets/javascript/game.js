document.addEventListener("DOMContentLoaded", function(event) { 
  


	const gameWords = ['bowser', 'zelda', 'kirby'];

	let remainingGuesses = 16;
	let wins = 0;
	let losses = 0;
	let currentWord = "";
	let currentWordLetters = [];
	let underscoreArray = [];
	let wrongLetters = [];

	function startGame () {
		remainingGuesses = 16;
		currentWord = gameWords[Math.floor(Math.random() * gameWords.length)];
		currentWordLetters = currentWord.split ("");

		for (let i = 0; i < currentWordLetters.length; i++) {
			// add _ for each letter in random word
			underscoreArray.push("_ ");
		
		}
		console.log(remainingGuesses);
		console.log(currentWordLetters);
		console.log(currentWord);
		console.log(underscoreArray);

		// add in html

		let html = "<p>Press any key to get started!</p>" + "<p> Wins: " + wins + "</p>" + "<p>Current Word</p>" + "<p>" + theGuess + "</p>" +"<p>Number of guesses remaining: " + remainingGuesses + "</p>" + "<p>Letters already guessed: " + wrongLetters + "</p>";

	
		document.querySelector("#game").innerHTML = html;

	}

	function checkLetters (letter) {
		for (let i = 0; i < currentWordLetters.length; i++) {

			if (letter === currentWordLetters[i]) {
				underscoreArray[i] = letter;
				console.log(underscoreArray);
				remainingGuesses--;
			}

			else {
				wrongLetters.push(letter);
				remainingGuesses--;
			}

			// move letters into wrongLetters array
			// take away remainingGuesses
		}

	}

	function checkWin () {
		// if underscoreArray matches current word letters win++ 
		// else if remaining guesses = 0 restart game, losses++
		//else console.log did not win or lose

	}

startGame();
window.addEventListener("keyup", function(event) {
	checkLetters(event.key);
	console.log(event.key);
	// check for a win
});


});


	
