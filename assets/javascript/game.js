document.addEventListener("DOMContentLoaded", function(event) { 
  

	// potential words
	const gameWords = ['bowser', 'zelda', 'kirby', 'gameboy', 'yoshi', 'sonic'];

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
		
		// html
		document.querySelector("#wins").innerHTML = wins;
		document.querySelector("#losses").innerHTML = losses;
		document.querySelector("#current-word").innerHTML = underscoreArray;
		document.querySelector("#remaining-guesses").innerHTML = remainingGuesses;
		document.querySelector("#wrong-letters").innerHTML = wrongLetters;

	}

 

	function checkLetters (letter) {

		

			if (currentWordLetters.indexOf(letter) === -1 && wrongLetters.indexOf(letter) === -1) {
				wrongLetters.push(letter);
				remainingGuesses--;
				checkWin();
					
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
	

		function checkWin () {
			
				if (underscoreArray.indexOf('_') === -1) {
					wins++;
					playWinSound();
					resetGame();
					
					


				} else if (remainingGuesses === 0) {
					losses++;
					resetGame();
					playloseSound();
					

				} else {
					console.log("Did not win or lose")
				}

				


		}

		let kirbyAnswer = ["k", "i", "r", "b", "y"];
		console.log(kirbyAnswer);


		function photoReveal () {

			if (underscoreArray.length !== kirbyAnswer.length) {

				for (let i = 0; i < underscoreArray.length; i++) {

					if (underscoreArray[i] !== kirbyAnswer[i]){
					document.querySelector(".kirby-photo").style.visibility = "visible";
					console.log(underscoreArray);
					}

				}

			}


		 	// 	if (underscoreArray === "k", "i", "r", "b", "y") {
				// 	document.querySelector(".kirby-photo").style.visibility = "visible";
				// 	console.log(underscoreArray);
				// }

				// 	 if (underscoreArray === "b", "o", "w", "s", "e", "r") {
				// 	document.querySelector(".bowser-photo").style.visibility = "visible";
				// 	console.log(underscoreArray);
				// }

				// 	 if (underscoreArray === "z", "e", "l", "d", "a") {
				// 	document.querySelector(".zelda-photo").style.visibility = "visible";
				// 	console.log(underscoreArray);
				// }

				// 	 if (underscoreArray === "y", "o", "s", "h", "i") {
				// 	document.querySelector(".yoshi-photo").style.visibility = "visible";
				// 	console.log(underscoreArray);
				// }

				// 	 if (underscoreArray === "g", "a", "m", "e", "b", "o", "y") {
				// 	document.querySelector(".gameboy-photo").style.visibility = "visible";
				// 	console.log(underscoreArray);
				// }

				// 	if (underscoreArray === "s", "o", "n", "i", "c") {
				// 	document.querySelector(".sonic-photo").style.visibility = "visible";
				// 	console.log(underscoreArray);
				// }

	}


	// reset button
	document.querySelector("#reset").addEventListener("click", resetGame);



	function resetGame (reset) {
    	
  		currentWordLetters = [];
		underscoreArray = [];
		wrongLetters = [];
		startGame();
		document.querySelector(".kirby-photo").style.visibility = "hidden";
		document.querySelector(".bowser-photo").style.visibility = "hidden";
		document.querySelector(".zelda-photo").style.visibility = "hidden";
		document.querySelector(".yoshi-photo").style.visibility = "hidden";
		document.querySelector(".gameboy-photo").style.visibility = "hidden";
		document.querySelector(".sonic-photo").style.visibility = "hidden";
					

	}


	// hint button

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

				if (currentWord === "sonic") {
					document.querySelector(".sonic-photo").style.visibility = "visible";
					sonicSound.play();
					

				}

				if (currentWord === "yoshi") {
					document.querySelector(".yoshi-photo").style.visibility = "visible";
					yoshiSound.play();
					

				}
	}



	document.querySelector("#hint").addEventListener("click", playHint);

    
    // calling the game funtions
	startGame();
	

	window.addEventListener("keyup", function(event) {
		if(event.keyCode >= 65 && event.keyCode <= 90){
			checkLetters(event.key);
			console.log(event.key);
		}

		


	});

});	
