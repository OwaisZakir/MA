// GSAP Animations
document.addEventListener("DOMContentLoaded", function () {
  // Navbar Animations
  gsap.from(".navbar-brand", {
    duration: 1,
    opacity: 0,
    x: -100,
    ease: "power2.out",
  });
  gsap.from(".navbar-nav .nav-link", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out",
    stagger: 0.2,
  });
  gsap.from(".search-bar", {
    duration: 1,
    opacity: 0,
    x: 100,
    ease: "power2.out",
  });
  gsap.from(".sign-in-btn", {
    duration: 1,
    opacity: 0,
    x: 100,
    ease: "power2.out",
  });

  // Hero Section Animations
  gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1, delay: 0.3 });
  gsap.from(".hero-subtitle", { opacity: 0, y: 50, duration: 1, delay: 0.6 });
  gsap.from(".btn-home", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 1,
    ease: "bounce.out",
  });
  gsap.from(".image-placeholder", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 1.3,
    stagger: 0.2,
  });

  // Hero Content Animations
  gsap.from(".hero-content h1", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power4.out",
  });
  gsap.from(".hero-content p", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    delay: 0.3,
    ease: "power4.out",
  });
  gsap.from(".btn-home", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    delay: 0.6,
    ease: "power4.out",
  });
  gsap.from(".hero-images img", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    delay: 0.9,
    ease: "power4.out",
  });

  // Parallax Effect for Background Image
  gsap.to(".hero-overlay", {
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    backgroundPosition: "50% 100%",
    ease: "power1.inOut",
  });

  // Parallax effect for the hero section (slight scale effect)
  gsap.to(".hero-section", {
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    scale: 1.05,
    ease: "power1.inOut",
  });

  // Fade-in effect for images in hero section as they scroll into view
  gsap.from(".hero-images img", {
    scrollTrigger: {
      trigger: ".hero-images",
      start: "top 75%",
      end: "bottom 25%",
      scrub: 1,
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: "power2.out",
  });
});
