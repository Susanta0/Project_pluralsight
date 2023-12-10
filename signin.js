let form = document.getElementById("form");
let email = document.getElementById("email");
let mobile = document.getElementById("number");
let password = document.getElementById("password");

form.addEventListener("submit",function(event){
    event.preventDefault()
    let userDetails ={
       email : email.value,
    //    mobile:mobile.value,
       password : password.value,
    }
    let savedDetails = JSON.parse(localStorage.getItem("userDetails")) || {}
    if(userDetails.email === savedDetails.email && userDetails.password === savedDetails.password){
        localStorage.setItem("isAuth","Authenticated")
        alert("Login Success")
        window.location.href = "./home.html"
    }else{
        alert("Wrong email & password")
    }
})