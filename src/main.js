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
