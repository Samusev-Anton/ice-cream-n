!function(){var e={openMenuBtn:document.querySelector(".menu-open-btn"),closeMenuBtn:document.querySelector(".menu-close"),menu:document.querySelector(".site-nav-wrap"),mobMenu:document.querySelector(".header-nav")};function n(){e.menu.classList.toggle("is-hidden")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n),e.mobMenu.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(mobileMenu.classList.remove("is-open"),openMenuBtn.setAttribute("aria-expanded",!1))}))}();
//# sourceMappingURL=index.f7f1781a.js.map
