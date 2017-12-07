document.addEventListener("DOMContentLoaded", function(event) { 
  


	const gameWords = ['bowser', 'zelda', 'kirby'];

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
		console.log(remainingGuesses);
		console.log(currentWordLetters);
		console.log(currentWord);
		console.log(underscoreArray);

		// // add in html

		

	}

	function checkLetters (letter) {
		for (let i = 0; i < currentWordLetters.length; i++) {

			if (letter === currentWordLetters[i]) {
				underscoreArray[i] = letter;
				console.log(underscoreArray);
				// remainingGuesses--;
				// console.log(remainingGuesses);
				checkWin();
				
			}

			else {
				wrongLetters.push(letter);
				// remainingGuesses--;
				// console.log(remainingGuesses);
				checkWin();
				
			}


		}


	}

	function checkWin () {
		
			if (underscoreArray.indexOf('_') === -1) {
				wins++;
				console.log(wins);
				console.log("you won");

			} else if (remainingGuesses === 0) {
				losses++;
				
				console.log(losses);

			} else {
				console.log("Did not win or lose")
			}
		
		
		
		// if underscoreArray matches current word letters win++ 
		// else if remaining guesses = 0 restart game, losses++
		//else console.log did not win or lose

	}

	startGame();

	window.addEventListener("keyup", function(event) {
		checkLetters(event.key);
		console.log(event.key);
		

	});
		





});












	// let htmlOne = "<p>Press any key to get started!</p>" + "<p> Wins: " + wins + 
	// 	"</p>" + "<p> Losses: " + losses + "<p>Current Word</p>" + "<p>" + underscoreArray + 
	// 	"</p>" +"<p>Number of guesses remaining: " + remainingGuesses + "</p>" + "<p>Letters already guessed: " 
	// 	+ wrongLetters + "</p>";

	
	// 	document.querySelector("#game").innerHTML = htmlOne;

	





	
