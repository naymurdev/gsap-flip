import gsap from "gsap";

const aboutAnimationEnter = (container) => {
  const tl = gsap.timeline();
  const heading = container.querySelector(".paragraph");
  const images = container.querySelectorAll("img");

  tl.from(heading, {
    yPercent: 100,
    opacity: 0,
  });
  tl.from(images, {
    yPercent: 100,
    opacity: 0,
    stagger: 0.2,
  });
  return tl;
};
export default aboutAnimationEnter;
