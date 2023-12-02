import gsap from "gsap";

function pageTransition(trigger) {
  var tl = gsap.timeline();

  tl.to(".transition li", {
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.1,
  });
  tl.to(".transition li", {
    scaleY: 0,
    transformOrigin: "top left",
    stagger: 0.1,
  });
  if (!trigger) {
    return;
  }
  return tl;
}

export default pageTransition;
