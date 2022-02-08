const nav = document.querySelector("header");
const hamburger = nav.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("menu");
});
