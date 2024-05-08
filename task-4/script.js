var overlay = document.querySelector(".overlay")
var popupbox = document.querySelector(".popup-box")
var displaypopup  = document.getElementById("display-popup")
displaypopup .addEventListener("click",function(){
   
    overlay.style.display = "block";
    popupbox.style.display = "block";
})
 var closebook = document.getElementById("close-book")
 closebook.addEventListener("click",function(event){
    event.preventDefault();
    overlay.style.display = "none";
    popupbox.style.display = "none";

 })

 var container = document.querySelector(".container")
 var booktittle = document.getElementById("book-tittle")
var bookauthor = document.getElementById("book-author")
var description = document.getElementById("description")
var addbook = document.getElementById("add-book")

  addbook.addEventListener("click",function(event){
    event.preventDefault();
     var div = document.createElement("div")
     div.setAttribute("class","box-container")
     div.innerHTML = `<h2>${ booktittle.value}</h2>
     <h5>${bookauthor.value}</h5>
     <p>${description.value}</p>
     <button id="closebtn" onclick="deleted(event)">Close</button>`
     container.append(div)
     overlay.style.display = "none";
     popupbox.style.display = "none";

  })
  function deleted(event){
    event.target.parentElement.remove()
    
  }
    
   