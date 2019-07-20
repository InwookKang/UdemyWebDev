//Scripts will need to run AFTER all the page has been load
//This event listener will guarentee that document has been 
//loaded successfully
document.addEventListener("DOMContentLoaded", function()
{	

	//Changes the colory of h1 tag to pink
	var h1 = document.querySelector("h1");
	h1.style.color = "#673AB7";

	//Changes the body tag from blue to white in inteval of 1 sec
	var imgTitle = document.getElementById("imgTitle1");
	var isBlue = false;

	setInterval(function()
	{
		if(isBlue == false)
		{
			imgTitle.style.color = "#e91e63";
		}
		else
		{
			imgTitle.style.color = "#304ffe";
		}

		isBlue = !isBlue;
	}, 1000);

	var classes = document.getElementsByClassName("thingsToDo");
	
	//Cannot perform foreach on classes because getElementsByClassName
	//returns list which doesnt have foreach method
	classes[0].style.color = "red";

	//querySelector uses CSS syntax to select an item in the document
	// no pre-symbol means its the tag
	//# - for id
	//. - for class
	var selector = document.querySelector("#firstitem");
	selector.style.backgroundColor = "#FFEB3B";

	//It can also select within sub node

	//Some useful document properties
	//document.URL - gets the link to the site
	//document.links - gets all the anchor tag's referred sites
	//document.body - gets all the current pages body contents in DOM
	//document.head - gets all the current pages head contents in DOM

	//These get Mehtods will return objects not HTML!
	//document.getElementById
	//document.getElementsByClassName
	//document.getElementsByTagName
	//document.querySelector - It will only get the first element if there are multiple class name
	//document.querySelectorAll - Returns all the elements that match the parameter

	//Console.dir(document) - Returns all the properties of the parameter

	//First Method
	var first = document.getElementById("first");
	first.style.fontStyle = "italic";
	console.log(first);
	//Second Method
	var second = document.getElementsByClassName("special");
	console.log(second[0]);
		//Third Method
	var Third = document.getElementsByTagName("p")[0];
	console.log(Third);
	//Fourth Method
	var Fourth = document.querySelector(".special"); 
	Fourth.style.fontSize = "large";
	console.log(Fourth);
	//Fifth Method
	//Returns all specified identifier
	var Fifth = document.querySelectorAll("h1");
	console.log(Fifth);

	//textContent - Returns a string of all the text contained in a given element
	var demoTextContent = document.querySelector("#heading1");
	console.log(demoTextContent.textContent);

});


