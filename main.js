import barba from "@barba/core";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import {
  aboutAnimationEnter,
  animationEnter,
  animationLeave,
  pageTransition,
} from "./js/animation";
gsap.registerPlugin(Flip);

const homePageIntroAnimation = (container) => {
  const select = (e) => container.querySelector(e);
  const selectAll = (e) => container.querySelectorAll(e);

  const imageGrid = select(".image-grid");
  const intro_images = select(".intro__images");
  const images = selectAll(".intro__images img");
  const header = selectAll(".headAnime");
  const stagged = selectAll(".stagged");
  gsap.set(images, {
    y: 100,
    opacity: 0,
  });
  gsap.set(header, {
    y: -200,
    opacity: 0,
  });
  gsap.set(stagged, {
    y: 30,
    opacity: 0,
  });
  const fadeUpImages = () => {
    return gsap.to(images, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.inOut",
      stagger: 0.02,
      onComplete: () => moveImagesToCenter(),
    });
  };

  const moveImagesToCenter = () => {
    const state = Flip.getState(images);
    intro_images.classList.remove("initial");
    intro_images.classList.add("img_center");

    return Flip.from(state, {
      duration: 2,
      ease: "expo.inOut",
      stagger: 0.15,
      onComplete: () => scaleBottomImage(),
    });
  };
  const scaleBottomImage = () => {
    const state = Flip.getState(images);

    intro_images.classList.remove("img_center");
    intro_images.classList.add("hidden");

    images.forEach((img) => {
      imageGrid.appendChild(img);
    });

    return Flip.from(state, {
      duration: 2,
      ease: "expo.inOut",
      stagger: 0.15,
      absolute: true,
      onComplete: () => infoAnimation(),
    });
  };

  const infoAnimation = () => {
    var tl = gsap.timeline();
    tl.to(stagged, {
      stagger: 0.2,
      opacity: 1,
      y: 0,
    });
    tl.to(header, {
      stagger: 0.2,
      opacity: 1,
      y: 0,
    });
    return tl;
  };

  fadeUpImages();
};

barba.init({
  sync: true,
  transitions: [
    {
      name: "home-transition",
      to: {
        namespace: ["home"],
      },
      async once({ next }) {
        homePageIntroAnimation(next.container);
      },
      async leave({ current }) {
        console.log("leaving");
        const done = this.async();
        pageTransition(current.trigger);
        await delay(1000);
        done();
      },

      async enter({ next }) {
        homePageIntroAnimation(next.container);
      },
    },
    {
      name: "about-transition",
      to: {
        namespace: ["about"],
      },
      async once({ next }) {
        aboutAnimationEnter(next.container);
      },
      async leave({ current }) {
        const done = this.async();
        pageTransition(current.trigger);
        await delay(1200);
        done();
      },

      async enter({ next }) {
        aboutAnimationEnter(next.container);
      },
    },
    {
      name: "general-transition",

      async once({ next }) {
        animationEnter(next.container);
      },
      async leave({ current }) {
        const done = this.async();
        animationLeave(current.container);
        await delay(500);
        done();
      },

      async enter({ next }) {
        animationEnter(next.container);
      },
    },
  ],
});

function delay(n) {
  n = n || 4000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}
