document.addEventListener("DOMContentLoaded", function()
{
    //Get Google Logo img 
    var googleImg = document.querySelector("#hplogo");

    googleImg.setAttribute("src", "https://kittenrescue.org/wp-content/uploads/2017/03/KittenRescue_KittenCareHandbook.jpg") 
    googleImg.style.width = "200px";
    googleImg.style.height = "200px";
    googleImg.style.border = "2px solid purple";

    var links = document.getElementsByTagName("a");

    //Loop through all anchor tags in the HTML page
    for(var i = 0; i < links.length; i++)
    {
        links[i].style.background = "#FF4081";
        links[i].style.border = "2px dashed red";
        links[i].style.color = "orange";
    }

    for(var i = 0; i < links.length; i++)
    {
        console.log(links[i].getAttribute("href"));
    } 
    
});