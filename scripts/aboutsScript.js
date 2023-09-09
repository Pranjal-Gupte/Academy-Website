window.addEventListener("scroll", () => {
    document.querySelector('nav').classList.toggle("window-scroll", window.scrollY > 0);
});

const menu = document.querySelector(".nav-menu");
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

openMenuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeMenuBtn.style.display = "inline-block";
    openMenuBtn.style.display = "none";
});

// Close Nav Menu

const closeNav = () => {
    menu.style.display = "none";
    closeMenuBtn.style.display = "none";
    openMenuBtn.style.display = "inline-block";
}

closeMenuBtn.addEventListener("click", closeNav);