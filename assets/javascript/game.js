alert("you have 10 guesses.Guess 1-10");

var answer = 3;

var guess; = prompt("What's your guess?");

for (i = 0; i<10; i++){
	if(answer===guess){
		alert("You guessed correctly");
		break;
	}else{
			guess = prompt("Try again");
		}

	}
