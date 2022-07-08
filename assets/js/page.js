const toggler = document.querySelector(".toggler");
const navbar = document.querySelector(".primary__bar");
toggler.addEventListener("click", () => {
    navbar.classList.toggle("active");
})


// window.addEventListener("scroll", function() {
//     var primary__nav = this.document.querySelector("primary__nav");
//     primary__nav.classList.toggle("sticky", window.scrollY > 50);
// })