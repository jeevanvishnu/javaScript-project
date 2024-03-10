//selecting pop box pop overly button
let popupbtn = document.getElementById("add-popup-btn")
let popupoverly= document.getElementById("popup-btn")
let popupbox = document.getElementById("popup-box")
let cancelbtn = document.getElementById("popup-cancel")

popupbtn.addEventListener("click",function(){
   popupoverly.style.display="block"
   popupbox.style.display="block"
})

cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupoverly.style.display="none"
   popupbox.style.display="none"
})
 let container = document.getElementById("container")
 let addbok = document.getElementById("add-bok")
 let booktitle = document.getElementById("bookTitle-input")
 let bookauthor = document.getElementById("book-author-input")
 let bookdescription =document.getElementById('book-descripition')

 addbok.addEventListener("click",function(event){
    event.preventDefault()
    let div =document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="update(event)">Delete</button>`
   container.append(div)
   popupoverly.style.display="none"
   popupbox.style.display="none"

 })

 function update(event){
    event.target.parentElement.remove()
 }