//hamburguer logica
const hamburguer = document.querySelector(".hamburguer");
const mainMenu = document.querySelector(".main-menu");
const menuToggles = document.querySelectorAll(".menu-toggle");

hamburguer.addEventListener("click", () => {
  mainMenu.classList.toggle("show");
});

menuToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const submenu = toggle.nextElementSibling;
    document.querySelectorAll(".submenu.show").forEach((openSubmenu) => {
      if (openSubmenu !== submenu) {
        openSubmenu.classList.remove("show");
      }
    });
    submenu.classList.toggle("show");
  });
});
