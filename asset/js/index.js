// Afficher ou cacher les villes sur la page d'acceuil

const citySection = document.querySelector(".city"),
  cityToggler = document.querySelector(".city-toggler");

cityToggler.addEventListener("click", showCities);

function showCities() {
  citySection.classList.toggle("active");
}

//Gestion du menu Principale

const menuBtn = document.querySelector(".burger"),
  mainContainer = document.querySelector(".main-container");

menuBtn.addEventListener("click", showMenu);

function showMenu() {
  menuBtn.classList.toggle("active");
  mainContainer.classList.toggle("active");
}
