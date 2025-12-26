document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("header ul");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

});
