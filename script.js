var btn = document.querySelector("button")
var input = document.querySelector("input")
var form = document.querySelector("form")
var h1 = document.querySelector("h1")

h1.innerHTML = localStorage.getItem('username')

form.addEventListener("submit",function(e){
    e.preventDefault()
    var user = input.value
    localStorage.setItem('username',user)
    form.style.display = "none"
    h1.innerHTML = localStorage.getItem('username')
})

if(localStorage.length == 0){
    form.style.display = "flex"
}else{
    form.style.display = "none"

}

// localStorage.clear()