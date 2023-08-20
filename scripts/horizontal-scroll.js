const ourCompanyText = document.querySelector(".our-company-text");

gsap.fromTo(
  ourCompanyText,
  {
    xPercent: 10, // Start right if 100 used it expands horizontal scroll big
  },
  {
    xPercent: -100, // End to the left (off the viewport)
    scrollTrigger: {
      trigger: ourCompanyText, // which elemnt to target
      start: "top bottom", // scroll start type
      end: "bottom top", // scroll end type
      scrub: true, // speed//true for smooth animation
    },
  }
);
