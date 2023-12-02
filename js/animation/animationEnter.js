import gsap from "gsap";

const animationEnter = (container) => {
  const tl = gsap.timeline({ ease: "power1.inOut" });
  const heading = container.querySelector("h1");
  const img = container.querySelector("img");
  const imgdiv = container.querySelector(".imgdiv");
  const para = container.querySelectorAll("p");
  tl.set(
    imgdiv,
    {
      xPercent: -100,
    },
    0
  );
  tl.set(
    img,
    {
      xPercent: 100,
    },
    0
  );

  tl.from(
    heading,
    {
      xPercent: -20,
      opacity: 0,
    },
    0
  )
    .to(
      imgdiv,
      {
        xPercent: 0,
      },
      0
    )
    .to(
      img,
      {
        xPercent: 0,
      },
      0
    )
    .from(
      para,
      {
        xPercent: -0,
        opacity: 0,
      },
      0
    );
  return tl;
};
export default animationEnter;
