const ourCompanyText = document.querySelector(".our-company-text");

gsap.fromTo(
  ourCompanyText,
  {
    xPercent: 10,
    margin: "20rem 50rem", // Start right if 100 used it expands horizontal scroll big
  },
  {
    xPercent: -100,
    margin: "20rem 0rem", // End to the left (off the viewport)
    scrollTrigger: {
      trigger: ourCompanyText, // which elemnt to target
      start: "top bottom", // scroll start type
      end: "bottom top", // scroll end type
      scrub: true, // speed//true for smooth animation
    },
  }
);
