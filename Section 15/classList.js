//DOM Manipulation

document.addEventListener("DOMContentLoaded", function()
{
	//Select an element
	var tag = document.getElementById("firstitem");

	//Manipulate
	tag.style.color = "blue";
	tag.style.border = "10px soild red";

	//Change the style of an element in a js file is not good practice
	//Changing of element style should be done in CSS file
	//Important to note that classList is not an array

	var hightlight = document.getElementById("firstitem");
	//Add class to element
	hightlight.classList.add("classNameInCSSFile");
	//Remove a class
	hightlight.classList.Remove("firstitem");
	//Toggle a class
	hightlight.classList.toggle("AnotherClass")
});