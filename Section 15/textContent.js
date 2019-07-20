
document.addEventListener("DOMContentLoaded", function()
{
	//Gets the Text in a tag
	var tag = document.querySelector("h1").textContent;

	//Changes the text of the element
	//If HTML tags are used, it will show the iteral text 
	tag.textContent = "Changed the Text of h1";

	//Gets the HTML of the element
	tag.innerHTML;

	//Changes the actual HTML 
	//This should not be used as it will over-write the existing HTML tag. 
	//Takes in the HTML tags
	tag.innerHTML = "Changed the Inner HTML";
});