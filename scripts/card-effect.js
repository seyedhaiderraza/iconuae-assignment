const visionImages = document.querySelectorAll(".our-vision img");

visionImages.forEach((image) => {
  gsap.fromTo(
    image,
    {
      y: 1000, // Start  500 value works well in centering wit text during scroll
    },
    {
      y: -400, // End -400 value works well in centering wit text during scroll
      scrollTrigger: {
        trigger: ".our-vision",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );
});
