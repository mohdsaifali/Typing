let form = document.getElementById("addForm")
let itemlist = document.getElementById("items")
let filter = document.getElementById("filter")
console.log(filter)
form.addEventListener("submit", function (e){
    e.preventDefault()//please prevent the default nature
    //console.log("xyz", e)
    let newitem = document.querySelector("#item").value
    // console.log(newitem)
    let li = document.createElement('li')
    li.className = "list-group-item"
    let btn = document.createElement("button")
    btn.className = "btn btn-danger btn-sm float-right delete"
    btn.appendChild(document.createTextNode("X"))
    li.appendChild(document.createTextNode(newitem))
    li.appendChild(btn)
    //console.log(li)
    itemlist.appendChild(li)
    document.querySelector("#item").value = ''
})

itemlist.addEventListener("click",function(e){
    if(e.target.classList.contains("delete")){
       confirm("Are You Sure Delete This")
     itemlist.removeChild(e.target.parentElement)
    }
    else{
        alert("bhai kiu time pass kr rhe hoo!!!")
    }
    
})

filter.addEventListener("keyup",function(y){  
   let text = y.target.value.toLowerCase()

   let items = document.getElementsByTagName("li")
   
   Array.from(items).forEach(function(contant){
       let itemName = contant.firstChild.textContent
       if(itemName.toLowerCase().indexOf(text)!=-1){
        contant.style.display= "block"
       }else{
            contant.style.display="none"
       }
   })
})