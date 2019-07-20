document.addEventListener("DOMContentLoaded", function()
{
    //4 different ways of changing element's style
    //1. Changing an element's style
    //2. Adding/Removing classes
    //3. Changing the content of a tag
    //4. Chaning Attributes (src, href, etc.)

    //Element's style
    //This is rather not a good practice as you are now mixing 
    //CSS style management into logic code
    var tag = document.querySelector("#firstitem");

    tag.style.color = "#00BCD4";
    tag.style.border = "10 px solid red";
    tag.style.fontSize = "50px";
    tag.style.background ="yellow";
    tag.style.marginTop = "50px";

    //Manipulate elements with Adding/Removing classes
    //This is the recommended practice to changing the element's style. 

    var item1 = document.querySelector("#heading1");
    console.log(item1);
    //Add class from the StyleFile.css file 
    item1.classList.add("first-item");
    console.log(item1.classList);

    //Remove class from the element
    item1.classList.remove("first-item");

    //Toggle a class from the element
    item1.classList.toggle("first-item");

    //textContext - Returns a string of all the text contained in a given element
    console.log(item1.textContent);
    //Content of the element can change also
    //If HMTL code is being placed in here, it will take it literally
    item1.textContent = "Hello World";
    
    //innerHTML - Returns the actual HTML content of a specific element
    console.log(item1.innerHTML);
    
    var link = document.querySelector("a");
    
    //getAttribute - Gets the specified attribute of an element.
    console.log(link.getAttribute("href"));

    //setAttribute - Sets the specified attribute to the element. 
    //For actual website links, http is required. 
    //If http is not specified, it will try to look at local directory
    link.setAttribute("href", "http://facebook.com");
    //textContent will change the displayed text. 
    //It wouldn't change the attributes
    link.textContent = "Link Works Now!";

    
});
