/**
 * Pasirinktame elemente is duotu duomenu yra sugeneruojami pasirenkami ingridientai.
 * @param {string} selector Taisykle, kaip rasti norima HTML elementa
 * @param {Object[]} data Duomenys, kuriuos naudojant yra konstruojamas HTML turinys.
 * @param {string} data[].img Ingridiento nuotrauka su pilnu failo pletiniu.
 * @param {string} data[].alt Ingridiento nuotraukos alt reiksme.
 * @returns {[boolean, string]} Funkcijos veikimo statusas `[error, message]`
 */

function images(selector, data) {
  if (typeof selector !== "string" || selector === "") {
    return [true, "Selector has to be a not-empty string"];
  }
  if (!Array.isArray(data)) {
    return [true, "Data has to be an array"];
  }
  if (data.length === 0) {
    return [true, "Data has to be a non-empty array"];
  }

  const imagesDOM = document.querySelector(selector);
  if (!imagesDOM) {
    return [true, "Could not found DOM element based on given selector"];
  }
  let HTML = "";
  for (const image of data) {
    if (
      typeof image !== "object" ||
      image === null ||
      Array.isArray(image) ||
      !image.img ||
      !image.alt
    ) {
      continue;
    }

    HTML += `
    <div class="img">
    <div class="a"><img src="./img/${image.img}" alt="${image.alt}" /></div>
    </div>
  `;
  }
  if (HTML === "") {
    return [true, "Data has no valid service objects"];
  }
  imagesDOM.innerHTML = HTML;

  return [false, "OK"];
}
export { images };

/*function title(selector) {
  const titleDOM = document.querySelector(selector);
  titleDOM.innerHTML = `<h4>Content<h4>`;
  console.log(titleDOM);
}*/
