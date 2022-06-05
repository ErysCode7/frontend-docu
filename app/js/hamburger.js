const hamburger = document.querySelector("[data-hamburger]")
const hamburgerSpan = document.querySelectorAll("[data-hamburger-span]")
const navbar = document.querySelector("#navbar")

hamburger.addEventListener("click", () => {
    hamburgerSpan.forEach(span => {
        span.classList.toggle("active")

    })
    hamburger.classList.toggle("active")
    hamburger.classList.toggle("not-active")
    navbar.classList.toggle("show")
})