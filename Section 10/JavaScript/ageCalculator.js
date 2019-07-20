var userAge = prompt("What is your age?");

while(1)
{
	if(userAge > 0)
	{
		var ageInDays = userAge * 365;
		console.log("Age in days: " + ageInDays);
		break;
	}
	else
	{
		userAge = prompt("Invalid age, Enter your age again.");
	}
}

