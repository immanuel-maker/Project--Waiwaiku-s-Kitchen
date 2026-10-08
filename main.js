// ==========================================
// 1. MOBILE MENU TOGGLE
// ==========================================
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const icon = menuBtn.querySelector("i");
    
    // Toggle icon between menu and close
    if (navLinks.classList.contains("open")) {
      icon.className = "ri-close-line";
    } else {
      icon.className = "ri-menu-line";
    }
  });

  // Close menu when a link is clicked (for mobile UX)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.querySelector("i").className = "ri-menu-line";
    });
  });
}

// ==========================================
// 2. SOCIAL MEDIA CUSTOM TOAST NOTIFICATION
// ==========================================
// ==========================================
// 2. SOCIAL MEDIA TOAST NOTIFICATION (NO REDIRECT)
// ==========================================
// ==========================================
// 2. SOCIAL MEDIA TOAST NOTIFICATION (NO REDIRECT)
// ==========================================
const toast = document.createElement("div");
toast.className = "social-toast";
document.body.appendChild(toast);

document.addEventListener("click", (e) => {
  const socialLink = e.target.closest(".footer__socials a");
  if (!socialLink) return;

  // Do NOT call e.preventDefault() — let the browser open the new tab naturally
  // Do NOT use window.open() or location.href — no JS redirect at all

  const icon = socialLink.querySelector("i");
  let handleText = "";

  if (icon) {
    if (icon.classList.contains("ri-facebook-circle-fill")) {
      handleText = "Priscilla Waiwaiku";
    } else if (icon.classList.contains("ri-instagram-fill")) {
      handleText = "@priscillawaiwaiku";
    } else if (icon.classList.contains("ri-whatsapp-fill")) {
      handleText = "WhatsApp: 0243612866";
    } else if (icon.classList.contains("ri-tiktok-fill")) {
      handleText = "@mamawu";
    }
  }

  // Just show the toast as visual feedback
  toast.innerHTML = `<i class="ri-user-heart-fill"></i> ${handleText}`;
  toast.classList.remove("show");
  void toast.offsetWidth;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
});

// ==========================================
// 3. AUTO-UPDATING COPYRIGHT YEAR
// ==========================================
// Note: Ensure your HTML footer has <span id="copyright-year">2026</span>
const yearSpan = document.getElementById("copyright-year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ==========================================
// 4. SCROLL REVEAL ANIMATIONS
// ==========================================
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2250,
    delay: 200,
    reset: false,
    mobile: false 
  });

  sr.reveal(".header__image", { origin: "right" });
  sr.reveal(".header__content h2", { delay: 125, origin: "left" });
  sr.reveal(".header__content h1", { delay: 150, origin: "bottom" });
  sr.reveal(".banner__card", { interval: 200, origin: "bottom", distance: "20px" });
  sr.reveal(".order__container h3", { origin: "top" });
  sr.reveal(".order__container .section__header", { delay: 125 });
  sr.reveal(".order__container .section__description", { delay: 150 });
  sr.reveal(".order__card", { interval: 150, origin: "bottom", distance: "40px" });
  sr.reveal(".event__image", { origin: "left" });
  sr.reveal(".event__details", { origin: "right", delay: 125 });
  sr.reveal(".reservation__container h3", { origin: "top" });
  sr.reveal(".reservation__container .section__header", { delay: 125 });
  sr.reveal(".order__intro", { delay: 150 });
  sr.reveal(".order__phone", { delay: 175, origin: "left" });
  sr.reveal(".order__whatsapp", { delay: 200, origin: "right" });
}