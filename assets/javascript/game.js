document.addEventListener("DOMContentLoaded", function(event) { 
  

	// potential words
	const gameWords = ['bowser', 'zelda', 'kirby', 'gameboy', 'yoshi', 'chomp'];

	// getting the variables and empty arrays ready
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
	let gameboySound = new Audio('assets/javascript/audio/Gameboy-Startup Sound.mp3');
	let yoshiSound = new Audio('assets/javascript/audio/ssbm_yoshi_07.wav');
	let chompSound = new Audio('assets/javascript/audio/mparty8_chomp.wav');

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
	// Pick a random word, split up the letters, and put an unerscore for each letter into the array
	function startGame () {
		remainingGuesses = 15;
		currentWord = gameWords[Math.floor(Math.random() * gameWords.length)];
		currentWordLetters = currentWord.split ("");

		for (let i = 0; i < currentWordLetters.length; i++) {
			underscoreArray.push("_");
		
		}
		
		// html
		document.querySelector("#wins").innerHTML = wins;
		document.querySelector("#losses").innerHTML = losses;
		document.querySelector("#current-word").innerHTML = underscoreArray;
		document.querySelector("#remaining-guesses").innerHTML = remainingGuesses;
		document.querySelector("#wrong-letters").innerHTML = wrongLetters;

	}

	
	// if the letter pressed isn't in the array of the random word chosen, push it to the wrong letters array
	// else, match them to the chosen word 
	function checkLetters (letter) {
		
			if (currentWordLetters.indexOf(letter) === -1 && wrongLetters.indexOf(letter) === -1) {
				wrongLetters.push(letter);
				remainingGuesses--;
				checkWin();
				hintReveal();
					
			} else {

				for (let i = 0; i < currentWordLetters.length; i++) {

					if (letter === currentWordLetters[i] && underscoreArray.indexOf(letter) === -1) {
						underscoreArray[i] = letter;
						remainingGuesses--;
						checkWin();		
					}

					if (wrongLetters[i] == letter) {
						remainingGuesses + 0;
					}

				}	
			}


		// html
		document.querySelector("#wins").innerHTML = wins;
		document.querySelector("#losses").innerHTML = losses;
		document.querySelector("#current-word").innerHTML = underscoreArray;
		document.querySelector("#remaining-guesses").innerHTML = remainingGuesses;
		document.querySelector("#wrong-letters").innerHTML = wrongLetters;


	}
	
		// if there are no more underscores, the game is won, restart
		// if remaining guesses is 0, game loss, restart
		function checkWin () {
			
				if (underscoreArray.indexOf('_') === -1) {
					wins++;
					playWinSound();
					resetGame();
					// photoReveal();

				} else if (remainingGuesses === 0) {
					losses++;
					resetGame();
					playloseSound();
					

				} else {
					console.log("Did not win or lose")
				}
		}



	// reset button
	document.querySelector("#reset").addEventListener("click", resetGame);



	function resetGame (reset) {
    	
  		currentWordLetters = [];
		underscoreArray = [];
		wrongLetters = [];
		startGame();
		document.querySelector("#hint").style.display = "none";
		document.querySelector(".kirby-photo").style.visibility = "hidden";
		document.querySelector(".bowser-photo").style.visibility = "hidden";
		document.querySelector(".zelda-photo").style.visibility = "hidden";
		document.querySelector(".yoshi-photo").style.visibility = "hidden";
		document.querySelector(".gameboy-photo").style.visibility = "hidden";
		document.querySelector(".chomp-photo").style.visibility = "hidden";
					

	}


	// hint button

	function hintReveal () {

		let amount = 5;

				
			for (let i = 3; i < wrongLetters.length; i++)
				if ( wrongLetters[i] < amount) {
					console.log("you get no hints");
				}

				else {
					
					document.querySelector("#hint").style.display = "block";
				}
	}


	function playHint () {

				if (currentWord === "kirby") {
					document.querySelector(".kirby-photo").style.visibility = "visible";
					kirbySound.play();

				}

				if (currentWord === "bowser") {
					document.querySelector(".bowser-photo").style.visibility = "visible";
					bowserSound.play();
					

				}

				if (currentWord === "zelda") {
					document.querySelector(".zelda-photo").style.visibility = "visible";
					zeldaSound.play();
					

				}

				if (currentWord === "gameboy") {
					document.querySelector(".gameboy-photo").style.visibility = "visible";
					gameboySound.play();
					

				}

				if (currentWord === "chomp") {
					document.querySelector(".chomp-photo").style.visibility = "visible";
					chompSound.play();
					

				}

				if (currentWord === "yoshi") {
					document.querySelector(".yoshi-photo").style.visibility = "visible";
					yoshiSound.play();
					

				}
	}


    
    // calling the game funtions
	startGame();
	
	window.addEventListener("keyup", function(event) {
		if(event.keyCode >= 65 && event.keyCode <= 90){
			checkLetters(event.key);
			console.log(event.key);
		}
	document.querySelector("#hint").addEventListener("click", playHint);	

	});

});	





// I couldn't figure this out

		// function photoReveal () {


		// 	if (underscoreArray.length != currentWordLetters.length) {

		// 		for (let i = 0; i < underscoreArray.length; i++) {

		// 			if (underscoreArray[i] != currentWordLetters[i]) {
		// 			document.querySelector(".kirby-photo").style.visibility = "visible";
		// 			document.querySelector(".kirby-photo").style.filter = "blur(0px)";
		// 			console.log(underscoreArray);
		// 			}

		// 			else {
		// 				console.log("no picture");
		// 			}

		// 		}

		// 	}

		// }
