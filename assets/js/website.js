const toggler = document.querySelector(".toggler");
const navbar = document.querySelector(".primary__bar");
toggler.addEventListener("click", () => {
    navbar.classList.toggle("active");
})