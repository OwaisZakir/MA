// GSAP Animations
window.onload = () => {
  gsap.from(".navbar-custom", {
    duration: 1.5,
    y: -100,
    opacity: 0,
    ease: "power3.out",
  });

  gsap.from(".section-header", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from(".btn-custom", {
    duration: 1,
    opacity: 0,
    scale: 0.8,
    ease: "back.out(1.7)",
    delay: 1,
  });
};

// Smooth Scrolling
document.querySelectorAll("a.nav-link-custom").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.onload = () => {
  // GSAP Animations for the hero section

  // Hero Title Slide-in from the Left
  gsap.from(".hero-title", {
    duration: 1.5,
    x: -200,
    opacity: 0,
    ease: "power3.out",
  });

  // Hero Subtitle Slide-in from the Right with delay
  gsap.from(".hero-subtitle", {
    duration: 1.5,
    x: 200,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5,
  });

  // CTA Button - Scaling Animation
  gsap.from(".btn-hero", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 1,
  });

  // Social Icons - Fade in with staggered effect
  gsap.from(".social-icon", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power3.out",
    delay: 1.5,
  });

  // Parallax effect for the background image
  window.addEventListener("scroll", () => {
    let offset = window.pageYOffset;
    document.querySelector(".hero-bg").style.transform = `translateY(${
      offset * 0.3
    }px)`; // Adjust parallax speed
  });

  // Animation for button hover: pulse effect
  const heroButton = document.querySelector(".btn-hero");
  heroButton.addEventListener("mouseover", () => {
    gsap.to(heroButton, { scale: 1.1, duration: 0.3, ease: "power1.inOut" });
  });

  heroButton.addEventListener("mouseout", () => {
    gsap.to(heroButton, { scale: 1, duration: 0.3, ease: "power1.inOut" });
  });
};
