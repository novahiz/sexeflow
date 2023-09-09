//Gestion du menu Principale

const menuBtn = document.querySelector(".burger"),
  navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", showNavMenu);

// fonction afficher le Menu

function showNavMenu() {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
}
