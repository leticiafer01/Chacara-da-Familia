const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".header nav");

// ===== Efeito ao rolar =====
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== Toggle menu mobile =====
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// ===== Scroll suave nos links =====
document.querySelectorAll(".header nav a").forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    nav.classList.remove("open"); // fecha menu mobile após clique
  });
});
