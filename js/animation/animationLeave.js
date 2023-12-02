import gsap from "gsap";

const animationLeave = (container) => {
  const tl = gsap.timeline();
  const imgdiv = container.querySelectorAll(".imgdiv");
  const img = container.querySelectorAll("img");
  tl.to(
    imgdiv,
    {
      xPercent: 100,
    },
    0
  ).to(
    img,
    {
      xPercent: -100,
    },
    0
  );
  return tl;
};

export default animationLeave;
