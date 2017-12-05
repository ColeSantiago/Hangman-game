document.addEventListener("DOMContentLoaded", function(event) { 
  


	let wordGuesses = ['bowser', 'zelda', 'kirby'];
	let remainingGuesses = 16;
	let wins = 0;


		let word = wordGuesses[Math.floor(Math.random() * wordGuesses.length)];
		let wordLength = word.length;


		let placeholders = new Array(wordLength + 1).join( '_ ' );


				document.onkeyup = function(event) {
					let userGuess = String.fromCharCode(event.keyCode).toLowerCase();


				    if (word.indexOf(userGuess) > -1) {
				        placeholders = placeholders.replace(placeholders[(word.indexOf(userGuess))], userGuess);
				        remainingGuesses--;
				        

					} else {

					   	console.log(userGuess);
					    remainingGuesses--;

					} if (remainingGuesses === 0) {
						
						console.log("lose");

					}





			let html = "<p>Press any key to get started!</p>" + "<p> Wins: " + wins + "</p>" + "<p>Current Word</p>" + "<p>" + placeholders + "</p>" +"<p>Number of guesses remaining: " + remainingGuesses + "</p>";

						// "<p>Letters already guessed: " + usedLetters + "</p>";

		
			document.querySelector("#game").innerHTML = html;


}



});
	
