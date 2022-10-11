import "./style.css";
/* Import af Motion One bibliotek */
// import { animate, stagger, inView, scroll, timeline } from "motion";

const btn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

function toggleMenu() {
  nav.classList.toggle("shown");

  const menuShown = nav.classList.contains("shown");

  if (menuShown) {
    console.log("luk");
    btn.textContent = "X";
  } else {
    btn.textContent = "☰";
    console.log("menu");
  }
}

btn.addEventListener("click", toggleMenu);

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
