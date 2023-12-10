// user Authenticate............
let isAuth = localStorage.getItem("isAuth") || "Not Authenticated";
if (isAuth !== "Authenticated") {
  window.location.href = "./signin.html";
}

// Sign in dropdown......................
let sign_catch = document.querySelector(".user-button");
let visiable1 = document.querySelector(".menu-1-1");
let angelrotet1 = document.querySelector(".fa-angle-down");

sign_catch.addEventListener("click", function () {
  if (visiable1.style.display === "block") {
    visiable1.style.display = "none";
    angelrotet1.style.transform = "rotate(0rad)";
    angelrotet1.style.transitionDuration = ".6s";
  } else {
    visiable1.style.display = "block";
    visiable1.style.position = "absolute";
    angelrotet1.style.transform = "rotate(3.142rad)";
    angelrotet1.style.transitionDuration = ".6s";
  }
});

document.body.addEventListener("click", function (event) {
  let targetElement = event.target;
  if (
    !sign_catch.contains(targetElement) &&
    !visiable1.contains(targetElement)
  ) {
    visiable1.style.display = "none";
    angelrotet1.style.transform = "rotate(0rad)";
    angelrotet1.style.transitionDuration = ".6s";
  }
});

// Solutions dropdown......................
let angelrotet2 = document.querySelector(".fa-chevron-down");
let coursedrop = document.querySelector("#s_drop");
let s_dropdown = document.querySelector(".drop-1");
coursedrop.addEventListener("click", function () {
  if (s_dropdown.style.display === "block") {
    s_dropdown.style.display = "none";
    angelrotet2.style.transform = "rotate(0rad)";
    angelrotet2.style.transitionDuration = ".6s";
    p_dropdown.style.display = "none";
    r_dropdown.style.display = "none";
  } else {
    s_dropdown.style.display = "block";
    s_dropdown.style.position = "absolute";
    angelrotet2.style.transform = "rotate(3.142rad)";
    angelrotet2.style.transitionDuration = ".6s";
  }
});
document.body.addEventListener("click", function (event) {
  let targetElement = event.target;
  if (
    !coursedrop.contains(targetElement) &&
    !s_dropdown.contains(targetElement)
  ) {
    s_dropdown.style.display = "none";
    angelrotet2.style.transform = "rotate(0rad)";
    angelrotet2.style.transitionDuration = ".6s";
  }
});

// Products dropdown......................
let angelrotet3 = document.querySelector("#rotet_p");
let coursedrop1 = document.querySelector("#p_drop");
let p_dropdown = document.querySelector(".product-drop");
coursedrop1.addEventListener("click", function () {
  if (p_dropdown.style.display === "block") {
    p_dropdown.style.display = "none";
    angelrotet3.style.transform = "rotate(0rad)";
    angelrotet3.style.transitionDuration = ".6s";
    s_dropdown.style.display = "none";
    r_dropdown.style.display = "none";
  } else {
    p_dropdown.style.display = "block";
    p_dropdown.style.position = "absolute";
    angelrotet3.style.transform = "rotate(3.142rad)";
    angelrotet3.style.transitionDuration = ".6s";
  }
});
document.body.addEventListener("click", function (event) {
  let targetElement = event.target;
  if (
    !coursedrop1.contains(targetElement) &&
    !p_dropdown.contains(targetElement)
  ) {
    p_dropdown.style.display = "none";
    angelrotet3.style.transform = "rotate(0rad)";
    angelrotet3.style.transitionDuration = ".6s";
  }
});

// Resources dropdown......................
let angelrotet4 = document.querySelector("#rotet_r");
let coursedrop2 = document.querySelector("#r_drop");
let r_dropdown = document.querySelector(".resources-drop");
coursedrop2.addEventListener("click", function () {
  if (r_dropdown.style.display === "block") {
    r_dropdown.style.display = "none";
    angelrotet4.style.transform = "rotate(0rad)";
    angelrotet4.style.transitionDuration = ".6s";
    s_dropdown.style.display = "none";
    p_dropdown.style.display = "none";
  } else {
    r_dropdown.style.display = "block";
    r_dropdown.style.position = "absolute";
    angelrotet4.style.transform = "rotate(3.142rad)";
    angelrotet4.style.transitionDuration = ".6s";
  }
});
document.body.addEventListener("click", function (event) {
  let targetElement = event.target;
  if (
    !coursedrop2.contains(targetElement) &&
    !r_dropdown.contains(targetElement)
  ) {
    r_dropdown.style.display = "none";
    angelrotet4.style.transform = "rotate(0rad)";
    angelrotet4.style.transitionDuration = ".6s";
  }
});
