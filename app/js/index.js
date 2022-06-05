const body = document.body
const darkmodeSVG = document.querySelector('[data-darkmode]')
const navLink = document.querySelectorAll(".nav-link")
const mainLinks = document.querySelectorAll(".main-links")


darkmodeSVG.addEventListener("click", () => {
    body.classList.toggle("darkmode")
    navLink.forEach(link => {
        link.classList.toggle("dark")
    })
    mainLinks.forEach(link => {
        link.classList.toggle("dark-links")
    })
})

