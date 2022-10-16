import {
  animate,
  stagger,
  scroll,
  inView,
} from "https://cdn.skypack.dev/motion";

document.addEventListener("DOMContentLoaded", () => {
  inView("header", ({ target }) => {
    animate(
      target.querySelectorAll("h1"),
      { transform: ["translateX(-500px)", "translateX(0)"], opacity: [0, 1] },
      {
        duration: 1,
        easing: "ease-in-out",
      }
    );
    animate(
      target.querySelector("button"),
      { transform: ["translateX(-500px)", "translateX(0)"], opacity: [0, 1] },
      {
        delay: 0.3,
        duration: 1,
        easing: "ease-in-out",
      }
    );
    animate(
      target.querySelector("p"),
      { transform: ["translateX(-500px)", "translateX(0)"], opacity: [0, 1] },
      {
        delay: 0.15,
        duration: 1,
        easing: "ease-in-out",
      }
    );
    animate(
      target.querySelector(".header_graphics"),
      { transform: ["scale(0)", "scale(1)"], opacity: [0, 1] },
      {
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });
  inView(".highlight", ({ target }) => {
    animate(
      target.querySelector("div"),
      { transform: ["translateX(-500px)", "translateX(0)"], opacity: [0, 1] },
      {
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });
  inView("#product", ({ target }) => {
    animate(
      target.querySelector("article section h2"),
      { transform: ["translateX(-500px)", "translateX(0)"], opacity: [0, 1] },
      {
        duration: 1,
        easing: "ease-in-out",
      }
    );
    animate(
      target.querySelector("article section p"),
      { transform: ["translateX(-500px)", "translateX(0)"], opacity: [0, 1] },
      {
        delay: 0.2,
        duration: 1,
        easing: "ease-in-out",
      }
    );
    animate(
      target.querySelector("article section a"),
      { opacity: [0, 1] },
      {
        delay: 0.5,
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });
  inView("#product article", ({ target }) => {
    animate(
      target.querySelectorAll(".product_graphics"),
      { transform: ["translateX(-500px)", "translateX(0)"], opacity: [0, 1] },
      {
        duration: 1,
        easing: "ease-in-out",
      }
    );
    animate(
      target.querySelectorAll(".product_text"),
      { transform: ["translateX(500px)", "translateX(0)"], opacity: [0, 1] },
      {
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });
  inView("#request", ({ target }) => {
    animate(
      target.querySelectorAll("div"),
      { transform: ["translateY(100px)", "translateY(0)"], opacity: [0, 1] },
      {
        duration: 1,
        easing: "ease-in-out",
      }
    );
  });
});
