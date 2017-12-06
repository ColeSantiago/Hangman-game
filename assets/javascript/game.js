document.addEventListener("DOMContentLoaded", function(event) { 
  


	let gameWords = ['bowser', 'zelda', 'kirby'];

	let remainingGuesses = 16;
	let wins = 0;

	function runWord() {
		let currentWord = gameWords[Math.floor(Math.random() * gameWords.length)];
	

	var theGuess = [];

	for (let i = 0; i < currentWord.length; i++) {

    theGuess[i] = "_";

  	}

	const wrongLetters = [];



	guessInput = document.getElementById("#letters");
				 window.addEventListener("keyup", function(event) {
            	 let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    	

            	if (userGuess === currentWord ) {
            		theGuess.push(userGuess);
            		remainingGuesses--;
            	}

            	else {
            		theGuess.push(wrongLetters);
            		remainingGuesses--;
            	}

            	if (remainingGuesses === 0) {
            		alert("Try Again");
            		remainingGuesses = 16;
            		

            	}

      
        

				let html = "<p>Press any key to get started!</p>" + "<p> Wins: " + wins + "</p>" + "<p>Current Word</p>" + "<p>" + theGuess + "</p>" +"<p>Number of guesses remaining: " + remainingGuesses + "</p>" + "<p>Letters already guessed: " + wrongLetters + "</p>";

	
				document.querySelector("#game").innerHTML = html;

			});

	}

runWord();


});





// document.getElementById("fname").addEventListener("keyup", myFunction);

// function myFunction() {
//     var x = document.getElementById("fname");
//     x.value = x.value.toUpperCase();
// }



	// let word = wordGuesses[Math.floor(Math.random() * wordGuesses.length)];
	// // let wordLength = word.length; // need something that takes your string and turns it into an array
	// let guessedLetters = [];


	




	// let placeholders = new Array(wordLength + 1).join( '_ ' );

	// console.log(placeholders);


	// document.onkeyup = function(event) {
	// 	let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	// 	let usedLetters = String.fromCharCode(event.keyCode).toLowerCase();


	//     if (userGuess === wordLength) {
	//     	guessedLetters.push(userGuess);
	//         // placeholders = placeholders.replace(placeholders[(word.indexOf(userGuess))], userGuess);
	//         remainingGuesses--;
	//         console.log(guessedLetters);
	        

	// 	} else {
	// 	    remainingGuesses--;
	// 	    guessedLetters.push(usedLetters);


	// 	} if (remainingGuesses === 0) {
			


	// 	} 





	


// }



// });
	
