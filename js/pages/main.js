import { elementsData } from "../../js/data/elementsData.js";
import { elements } from "../../js/components/elements/elements.js";

import { imagesData } from "../data/imagesData.js";
import { images } from "../components/images/images.js";
//import { title } from "../components/images/images.js";
const nav = document.querySelector("header");
const hamburger = nav.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("menu");
});

elements("#elements_block", elementsData);

const [imagesErr, imagesMsg] = images("#img_block", imagesData);

if (imagesErr) {
  console.error(imagesMsg);
} else {
  console.log(imagesMsg);
}
