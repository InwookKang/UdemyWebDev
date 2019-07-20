//Come up with 4 different ways to select the first <p> tag

document.addEventListener("DOMContentLoaded", function()
{
	var element = document.getElementById("first");
	console.log(element);
	var className = document.getElementsByClassName("special")[0];
	console.log(className);
	var Tag = document.getElementsByTagName("p")[0];
	console.log(Tag);
	var selector = document.querySelector("#first");
	console.log(selector);
	//Can also be selected by using a '+' sign
	var plus = document.querySelector("h1 + p");
	console.log(plus);
});	