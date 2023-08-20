gsap.registerPlugin(ScrollTrigger);
const allFadeEffectSecitons = document.querySelectorAll(".fade-eff");

allFadeEffectSecitons.forEach((element) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 20, //10 scroll gives slower and visible fade in effect
    },
    {
      opacity: 1,
      y: 0, //position where opacity will become 1
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1, //true for faster and  for slower
      },
    }
  );
});
