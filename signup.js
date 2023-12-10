let form = document.getElementById("form");
let email = document.getElementById("email");
let mobile = document.getElementById("number");
let password = document.getElementById("password");

form.addEventListener("submit",function(event){
    event.preventDefault()
    let userDetails ={
       email : email.value,
       mobile : mobile.value,
       password : password.value,
    }
    localStorage.setItem("userDetails", JSON.stringify(userDetails))
    window.location.href = "./signin.html"
})