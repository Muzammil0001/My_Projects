//Header Scroll=============
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    }
    else {
        nav.classList.remove("header-scrolled");
    }
}

let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");
console.warn(navCollapse)
navbar.forEach(function (e) {
    e.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })

});

 
let signIn = document.getElementById("signIn")
let signUp = document.getElementById("signUp");
setTimeout(() => {
    signIn.style.display = "block";
}, 5000);

const signUpFunc = () => {
    signIn.style.display = "none";
    signUp.style.display = "block";
}
const signInFunc = () => {
    signUp.style.display = "none";
    signIn.style.display = "block";
}
const closeFunc = () => {
    signIn.style.display = "none";
    signUp.style.display = "none";
}
