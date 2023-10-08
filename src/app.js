const bars = document.getElementById("bars");
const menu = document.getElementById("menu");

bars.addEventListener("click" , () => {
    // menu.classList.remove("hidden");
    menu.classList.toggle("hidden");
})