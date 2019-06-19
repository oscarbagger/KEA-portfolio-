window.addEventListener("load", sidenVises);

function sidenVises() {
    document.querySelector(".menutoggler").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    document.querySelector("#projektmenu").classList.toggle("hidden");    
}