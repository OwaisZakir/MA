document.addEventListener("DOMContentLoaded", function () {
  // Hero Section Content Animation (fade-in and slide-up)
  gsap.to(".hero-content", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero", // Trigger animation when the .hero section is in view
      start: "top center", // When the top of the section reaches the center of the viewport
      end: "bottom center", // End the animation when the bottom of the section reaches the center
      scrub: true, // Scrubs the animation based on the scroll position
    },
  });

  // Navbar Animations
  gsap.from(".navbar-brand", {
    duration: 1,
    opacity: 0,
    x: -100,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".navbar",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.from(".navbar-nav .nav-link", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".navbar",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.from(".search-bar", {
    duration: 1,
    opacity: 0,
    x: 100,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".navbar",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.from(".sign-in-btn", {
    duration: 1,
    opacity: 0,
    x: 100,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".navbar",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  // Scroll-triggered animations for the About Us section
  gsap.from(".section-heading h2", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-us",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  gsap.from(".section-heading p", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-us",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  // Animating the "What We Stand For" heading
  gsap.from(".values h3", {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".values",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  gsap.from(".about-info h3", {
    opacity: 0,
    x: -100,
    duration: 1,
    delay: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-info",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  gsap.from(".about-info p", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-info",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  gsap.from(".about-info img", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-info",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  gsap.from(".values .col-md-4", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".values",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });
});
