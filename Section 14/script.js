//In JavaScript, Objects are alot like Dictionarys
//Properties inside objects are the key and the values are values 
//New Properties can be added even after Object has been created. 

//Initialize Object
var person = {
	name: "Inwook",
	age: 21,
	city: "Bayside"
};

//Method 1
var person = {}
person.name = "Kang"

//Method 2
var person = {
	name: "Yang",
	age: 22,
	city: "Memphes"
};

//Method 3
var person = new Object();
person.name = "Inwook";
person.age = 22;
person.city = "NY"

//Can add property to an object after it has been created
var dog = {
	name: "Hello",
	type: "poodle"
};

dog.age = 21;

//Nested Objects
var posts = [
	{
		title: "Dogs are cool",
		author: "Inwook",
		comments: ["Awesome Post", "Not good post"]
	},
	{
		title: "Cats are not Cool",
		author: "Inyoung",
		comments: ["I dont like it", "Xd"]
	}
]

//Exercise 1
//Determine if each statement is valid or invalid
var exercise1 = {};

//Valid
exercise1._name = "Hedwig";

//Valid
exercise1.age = 6;

//Valid
var prop = "color";

//Valid
exercise1[prop] = "red";

//Invalid - cannot 
//exercise1.123 = true;

//Exercise 2
var someObject = {
	friends: [
		{ name: "Harry" },
		{ name: "Hero" },
		{ name: "Mary" }
	],
	//Property names can have spaces. It just has to be inside double quotes
	"fav color": "red", 
	isEvil: false
};

var str = "friends";
// Can look up object property using dot notation
//Not Valid
console.log(someObject.friends[0].str);
//Valid
console.log("hello" + someObject[str][1].name); //Can look up object property using square bracket

console.log(someObject["fav color"]); //If Object has a property that has a space in the property name, use Square brakets


//Write code to retrieve "Harry" from someObject
//Go one "layer" at a time!

someObject.friends[0].name

//Exercise 3
//Create an array of movies objects. Each Movie should have 
//a title, rating, and hasWatched Properties.
//Iterate through the array and print out something that looks
//like: 

// You have watched "In Bruges" - 5 Stars
// You have not seen "Frozen" - 4.5 Stars
// You have Seen "Mad Max Fury Road" - 5 Stars

var WhiteChicks =
{
	rating: 5,
	title: "White Chicks",
	hasWatched: false
};

var HarryPotter =
{
	rating: 3.5,
	title: "Harry Potter and the Slick Stone",
	hasWatched: false
};

var Grinch =
{
	rating: 1.5,
	title: "Grinch",
	hasWatched: true
};

var Movies =
	[
		WhiteChicks,
		HarryPotter,
		Grinch
	];

Movies.forEach(function (movie)
{
	var result = buildString(movie);
	console.log(result);
});

function buildString(movie) 
{
	var result = "You have ";
	if (movie.hasWatched) 
	{
		result += "Watched ";
	}
	else 
	{
		result += "Not Watched ";
	}
	result += movie.title + " - " + movie.rating + " Stars.";
	return result;
}

//Namespace
var animal =
{
	weight: 99,
	age: 2,
	isCool: false,
	friends: ["Harry", "Kelly"],
	speak: function () 
	{
		return "Rawrrr!";
	}
}

var dogSpace = {};
dogSpace.speak = function () 
{
	return "Woof";
};

var catSpace = {};
catSpace.speak = function () 
{
	return "Meow";
};

//Keyword: This
var comments = {};
comments.data = ["This is string", "I like doing this things", "Dont get sucked in!"];

comments.print = function () 
{
	//this is referring to comments object
	this.data.forEach(function (sentence) 
	{
		console.log(sentence);
	});
}



