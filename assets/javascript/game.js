document.addEventListener("DOMContentLoaded", function(event) { 
  


	const gameWords = ['bowser', 'zelda', 'kirby', 'triforce', 'shyguy', 'sonic'];

	let remainingGuesses = 15;
	let wins = 0;
	let losses = 0;
	let currentWord = "";
	let currentWordLetters = [];
	let underscoreArray = [];
	let wrongLetters = [];

	
	

	function startGame () {
		remainingGuesses = 15;
		currentWord = gameWords[Math.floor(Math.random() * gameWords.length)];
		currentWordLetters = currentWord.split ("");

		for (let i = 0; i < currentWordLetters.length; i++) {
			underscoreArray.push("_");
		
		}
		

		document.querySelector("#wins").innerHTML = wins;
		document.querySelector("#losses").innerHTML = losses;
		document.querySelector("#current-word").innerHTML = underscoreArray;
		document.querySelector("#remaining-guesses").innerHTML = remainingGuesses;
		document.querySelector("#wrong-letters").innerHTML = wrongLetters;

	}



	function checkLetters (letter) {

		if (currentWordLetters.indexOf(letter) === -1) {
			wrongLetters.push(letter);
			// console.log(wrongLetters);
			remainingGuesses--;
			// console.log(remainingGuesses);
			checkWin();
				
		} else {

			for (let i = 0; i < currentWordLetters.length; i++) {

				if (letter === currentWordLetters[i]) {
					underscoreArray[i] = letter;
					// console.log(underscoreArray);
					remainingGuesses--;
					// console.log(remainingGuesses);
					checkWin();
				}

				if (wrongLetters[i] == letter) {
					remainingGuesses + 0;
				}

			}


		}



		document.querySelector("#wins").innerHTML = wins;
		document.querySelector("#losses").innerHTML = losses;
		document.querySelector("#current-word").innerHTML = underscoreArray;
		document.querySelector("#remaining-guesses").innerHTML = remainingGuesses;
		document.querySelector("#wrong-letters").innerHTML = wrongLetters;


	}


	

	function checkWin () {
		
			if (underscoreArray.indexOf('_') === -1) {
				wins++;
				resetGame();
				// console.log(wins);
				// console.log("you won");

			} else if (remainingGuesses === 0) {
				losses++;
				resetGame();
				
				// console.log(losses);

			} else {
				console.log("Did not win or lose")
			}

	}

	function resetGame (reset) {
    	
  		currentWordLetters = [];
		underscoreArray = [];
		wrongLetters = [];
		startGame();
	}


    // Make sure the hangman image is cleared
    // document.getElementById("hangmanImage").src = "";

    // Build the guessing word and clear it out
    

	startGame();

	window.addEventListener("keyup", function(event) {
		checkLetters(event.key);
		console.log(event.key);
		


	});

});	
