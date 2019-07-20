var problem = prompt("Problem to Solve?");

switch(Number(problem))
{
	case 1:
	{
		var age = prompt("What is your age?");
		var squareroot = Math.sqrt(age);

		if(age < 0)
		{
			console.log("ERROR: Age Cannot be negative!");
		}
		 if(age === 21)
		{
			console.log("Happy 21st Birthday!!!");
		}
		 if(age % 2 === 1)
		{
			console.log("Your age is Odd!");
		}
		if(age % squareroot === 0)
		{
			console.log("Perfect square!");
		}
		else
		{
			console.log("Age is Not Perfect Square");
		}
		break;
	}
	// While loop example
	case 2:
	{
		var guessingNumber = 10;
		while(1)
		{
			var userInput = prompt("Running Guessing Game. Enter Number.");
			if(guessingNumber === Number(userInput))
			{
				console.log("You guessed Correctly!");
				break;
			}
			else
			{
				userInput = prompt("Wrong! Guess Again, Enter Number");
			}
		}

		break;
	}
	// WHile Loop Practice
	case 3:
	{
		console.log("Printing all numbers between -10 and 19");
		var num = -10;
		while(num != 20)
		{
			console.log(num);
			num++;
		}

		console.log("Printing all even numbers between 10 and 40");
		num = 10;
		while(num <= 40)
		{
			if(num % 2 === 0)
			{
				console.log(num);
			}
			num++;
			
		} 

		console.log("Printing all odd numbers between 300 and 333");
		num = 300;
		while(num <= 333)
		{
			if(num % 2 === 1)
			{
				console.log(num);
			}
			num++;
		}

		console.log("Printing all numbers divisble by 5 and 3 between 5 and 50");
		num = 5;
		while(num <= 50)
		{
			if(num % 5 === 0 &&
				num % 3 === 0)
			{
				console.log(num);
			}
			num++;
		}


		break;
	}
	// WHile Loop Exercise
	case 4:
	{
		console.log("Are we There Yet Program");
		var answer = prompt("Are we There Yet?")
		while(answer.indexOf("yes") === -1 &&
			  answer.indexOf("yeah") === -1)
		{
			answer = prompt("Are we There Yet?");
		}
		alert("YAY WE MADE IT!");
		break;
	}
	// For Loop exercise
	case 5:
	{
		console.log("Print all numbers between -10 and 19");
		for(var i = -10; i <= 19; i++)
		{
			console.log(i);
		}

		console.log("Print all even numbers between 10 and 40");
		for(var i = 10; i <= 40; i++)
		{
			if(i % 2 === 0)
			{
				console.log(i);
			}
		}

		console.log("Print all odd numbers between 300 and 333");
		for(var i = 300; i <= 333; i++)
		{
			if(i % 2 === 1)
			{
				console.log(i);
			}
		}

		console.log("Print all numbers divisble by 5 and 3 between 5 and 50");
		for(var i = 5; i <= 50; i++)
		{
			if(i % 5 ===0 &&
				i % 3 === 0)
			{
				console.log(i);
			}
		}
		break;
	}
	// Functions Problem Set
	case 6:
	{
		console.log("isEven");
		var answer = isEven(4);
		console.log(answer);
		answer = isEven(21);
		console.log(answer);
		answer = isEven(68);
		console.log(answer);
		answer = isEven(333);
		console.log(answer);
		
		console.log("factorial");
		var factorialA = factorial(5);
		console.log(factorialA);
		factorialA = factorial(2);
		console.log(factorialA);
		factorialA = factorial(10);
		console.log(factorialA);
		factorialA = factorial(0);
		console.log(factorialA);

		console.log("KebabToSnake");
		var snakeA = kebabToSnake("hello-world");
		console.log(snakeA);
		snakeA = kebabToSnake("dogs-are-awesome");
		console.log(snakeA);
		snakeA = kebabToSnake("blah");
		console.log(snakeA);
		break;
	}
	default:
	{		
		break;
	}
}

function isEven(num)
{
	if(num % 2 === 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function factorial(num)
{
	var answer;
	if(num <= 1)
	{
		return 1;
	}
	else
	{
		answer = factorial(num-1) * num;
		return answer;
	}
}

function kebabToSnake(message)
{
	var strReturn = message;
	if(message.indexOf("-") !== -1)
	{
		strReturn = message.replace(/-/g, "_");
	}

	return strReturn;
}







