//selcet popupbox and overlay
var popupoverlay=document.querySelector(".popup-overlay")

var popupbox=document.querySelector(".popupbox")


//add popup button
var addpopupbtn=document.getElementById("add-popupbtn")


addpopupbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


//selcet cancel button
var cancelbutton=document.getElementById("cancel-popup")

cancelbutton.addEventListener("click",function(event)
{
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})


//selct containr,add book,add title,review
var container=document.querySelector(".container")
//var popupbox=document.getElementById("popupbox")
var addbook=document.getElementById("add-movie")
var booktitle=document.getElementById("movie-name-input")
var  booklink=document.getElementById("movie-link-input")

var descrption=document.getElementById("movie-descrption-input")

//nalla parakanum



addbook.addEventListener("click",function(event){
    event.preventDefault()
    
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1> ${booktitle.value}</h1>
    <h3>${booklink.value}</h3>
    <p>${descrption.value}</p>
    <button onclick="deletemovie(event)">Delete</button>`
    container.append(div)

    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

function deletemovie(event){
    event.target.parentElement.remove()
}






