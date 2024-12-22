// Combine everything inside a single window.onload
window.onload = () => {
  // GSAP Animations for Navbar
  gsap.from(".navbar-custom", {
    duration: 1.5,
    y: -100,
    opacity: 0,
    ease: "power3.out",
  });

  // GSAP Animations for the hero section
  gsap.from(".hero-title", {
    duration: 1.5,
    x: -200,
    opacity: 0,
    ease: "power3.out",
  });

  gsap.from(".hero-subtitle", {
    duration: 1.5,
    x: 200,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5,
  });

  gsap.from(".btn-hero", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)",
    delay: 1,
  });

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
    document.querySelector(".hero-bg").style.transform = `translateY(${offset * 0.3}px)`;
  });

  // Animation for button hover: pulse effect
  const heroButton = document.querySelector(".btn-hero");
  heroButton.addEventListener("mouseover", () => {
    gsap.to(heroButton, { scale: 1.1, duration: 0.3, ease: "power1.inOut" });
  });

  heroButton.addEventListener("mouseout", () => {
    gsap.to(heroButton, { scale: 1, duration: 0.3, ease: "power1.inOut" });
  });

  // GSAP Animation for Service Cards
  gsap.from(".service-card", {
    duration: 1.2,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Hover animation effect for service icons
  const icons = document.querySelectorAll(".service-icon");
  icons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
      gsap.to(icon, { scale: 1.2, duration: 0.3 });
    });
    icon.addEventListener("mouseout", () => {
      gsap.to(icon, { scale: 1, duration: 0.3 });
    });
  });

  // Smooth Scrolling for navigation links
  document.querySelectorAll("a.nav-link-custom").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};
