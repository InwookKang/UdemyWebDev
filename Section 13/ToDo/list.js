var ToDos = ["More Coding", "Love More", "Hello World it"];
var numbers = [1,2,3,4,5,6,7,8,9,10];

do
{
	var input = prompt("What Would You Like To Do? Type quit to End");	
	if(input === "list")
	{
		listToDos();		
	}
	else if(input === "new")
	{
		AddToDo();
	}
	else if(input === "delete")
	{
		DeleteToDo();
	}
	else if(input === "reverse")
	{
		reversePrint();
	}
	else if(input === "sum")
	{
		sumArray();
	}
	else if(input === "uniform")
	{
		isUniform();
	}
	else if(input === "max")
	{
		max();
	}
}while(input != "quit");

console.log("App Closed");




function listToDos()
{
	console.log("**********");
	//This Function will take in a function and iterate the items in
	//the array. 
	ToDos.forEach(function(item, index) 
	{
		console.log(index + ": " + item);
	});
	console.log("**********");
}

function AddToDo()
{
	var newTodo = prompt("Enter New ToDo");
	ToDos.push(newTodo);

	console.log("Added new ToDo");
}

function DeleteToDo()
{
	var indexToDelete = prompt("Select the Index To Delete");

	//Splice on array will delete item
	//Parameter: Start Index to delete, Number of items to delete from the start point 
	ToDos.splice(indexToDelete, 1);

	console.log("Deleted ToDo");
}

function reversePrint()
{
	for (var i = numbers.length - 1; i >= 0; i--) 
	{
		console.log(numbers[i]);
	}
}

function isUniform()
{
	var answer = true;

	for (var i = 0; i <= numbers.length - 1; i++) 
	{
		for (var j = i+1; j <= numbers.length - 1; j++) 
		{
			if(numbers[i] === numbers[j])
			{
				answer = false;
				break;
			}
		}
	}

	if(!answer)
	{
		console.log("false");
	}
	else
	{
		console.log("true");		
	}

}

function sumArray()
{
	var sum = 0;
	numbers.forEach(function(item)
	{
		sum += item;
	});

	console.log(sum);
}

function max()
{
	var max = 0;

	numbers.forEach(function(item)
	{
		if(item >= max)
		{
			max = item;
		}
	});

	console.log(max);
}
