// Make the logo click and back to home
function LogoHome() {
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
}

// Highlight the active navigation link (IIFE style)
(function setActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(a => {
    if (a.getAttribute("href") === path) {
      a.classList.add("active");
    }
  });
})();

// Run when the page loads
document.addEventListener("DOMContentLoaded", () => {
  LogoHome();
});
