

	var computerChoices=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o','p','q','r','s','t','u','v','w', 'x', 'y', 'z']

	var win = 0;
	var loss = 0;
	var guessesLeft = 10;
	var yourGuess = [];


	
	function comptGuess() 
	{
	
		var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    	console.log('computer: ' + computerGuess);
    	return computerGuess;
	}

	var compG = comptGuess();

  	document.onkeyup = function(event) {
  	var userGuess = event.key;
  	console.log("user: "+ userGuess);

	
	if(guessesLeft > 0) 
	{
		
	
		if (userGuess === compG) {
		  	win++;
		  	console.log('wincounter: ' + win);
		  	guessesLeft--
		  	console.log('guesscounter: ' + guessesLeft);
		  	yourGuess.push(userGuess);
		  	console.log('userGuessArray: '+ yourGuess);
		  	compG = comptGuess();
			guessesLeft =10;
			yourGuess = [];
			document.getElementById("end").innerHTML ="<br>"+"Game Restrated!!!";

	  	}
	  	else
	  	{
			guessesLeft--
	  		yourGuess.push(userGuess);
		  	console.log('userGuessArray: '+ yourGuess);

	  	}
	}
	else
	{
			loss++;
			console.log('losscounter: ' + loss);
			compG = comptGuess();
			guessesLeft =10;
			yourGuess = [];
			document.getElementById("end").innerHTML ="<br>"+"Game Restrated!!!";
			

	}
		

	
	var domEl = document.getElementById('game')

	var htmlToInsert = 'Wins: ' + win + "<br>"  +"Losses: " + loss + "<br>" + "Guesses Left: " + guessesLeft + "<br>" + "Your Guess so far: " + yourGuess + "<br>";
	
	domEl.innerHTML = htmlToInsert;
	


    }



  

