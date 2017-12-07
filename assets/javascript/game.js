document.addEventListener("DOMContentLoaded", function(event) { 
  


	const gameWords = ['bowser', 'zelda', 'kirby', 'triforce', 'shyguy', 'sonic'];

	let remainingGuesses = 15;
	let wins = 0;
	let losses = 0;
	let currentWord = "";
	let currentWordLetters = [];
	let underscoreArray = [];
	let wrongLetters = [];

	
	// Hint sounds
	let kirbySound = new Audio('assets/javascript/audio/Kirby-Swallowing.wav');
	let bowserSound = new Audio('assets/javascript/audio/Bowser1.wav');
	let zeldaSound = new Audio('assets/javascript/audio/MC_Zelda_Hey.wav');
	let triforceSound = new Audio('assets/javascript/audio/OOT_HandTriforce.wav');
	let shyguySound = new Audio('assets/javascript/audio/mparty8_shy_guy_03.wav');
	let sonicSound = new Audio('assets/javascript/audio/S3K_AC.wav');

	// Win Sounds
	let congratulationsSound = new Audio('assets/javascript/audio/win/mk64_mario_a11.wav');
	let gotItSound = new Audio('assets/javascript/audio/win/mk64_mario08.wav');
	let toadYeaSound = new Audio('assets/javascript/audio/win/mk64_toad06.wav');
	let toadBestSound = new Audio('assets/javascript/audio/win/mk64_toad07.wav');
	
	// Lose Sounds
	let marioLoseSound = new Audio('assets/javascript/audio/lose/mk64_mario05.wav');
	let toadLoseSound = new Audio('assets/javascript/audio/lose/mk64_toad04.wav');
	let warioLoseSound = new Audio('assets/javascript/audio/lose/mk64_wario05.wav');

	// sound arrays and functions
	let winSounds = [congratulationsSound, gotItSound, toadYeaSound, toadBestSound];
	let loseSounds = [marioLoseSound, toadLoseSound, warioLoseSound];

	function playWinSound () {
		let currentSound = winSounds[Math.floor(Math.random() * winSounds.length)];
		currentSound.play();

	}

	function playloseSound () {
		let currentSound = loseSounds[Math.floor(Math.random() * loseSounds.length)];
		currentSound.play();

	}

	
	//game functions
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
				playWinSound();

			} else if (remainingGuesses === 0) {
				losses++;
				resetGame();
				playloseSound();
				

			} else {
				console.log("Did not win or lose")
			}


	}

	document.querySelector("#reset").addEventListener("click", resetGame);



	function resetGame (reset) {
    	
  		currentWordLetters = [];
		underscoreArray = [];
		wrongLetters = [];
		startGame();
	}

	function playHintSound () {

		if (currentWord === "kirby") {

					kirbySound.play();

				}

				if (currentWord === "bowser") {

					bowserSound.play();

				}

				if (currentWord === "zelda") {

					zeldaSound.play();

				}

				if (currentWord === "triforce") {

					triforceSound.play();

				}

				if (currentWord === "sonic") {

					sonicSound.play();

				}

				if (currentWord === "shyguy") {

					shyguySound.play();

				}
	}


	document.querySelector("#hint").addEventListener("click", playHintSound);




    // Make sure the hangman image is cleared
    // document.getElementById("hangmanImage").src = "";

    // Build the guessing word and clear it out
    

	startGame();

	window.addEventListener("keyup", function(event) {
		checkLetters(event.key);
		console.log(event.key);

		


	});

});	
