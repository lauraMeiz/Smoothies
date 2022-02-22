/**
 * Pasirinktame elemente is duotu duomenu yra sugeneruojami sarasas, kuriame nurodomos naudos/vitaminai.
 * @param {string} selector Taisykle, kaip rasti norima HTML elementa
 * @param {Object[]} data Duomenys, kuriuos naudojant yra konstruojamas HTML turinys.
 * @param {string} data[].ul tekstas
 
 * @returns {[boolean, string]} Funkcijos veikimo statusas `[error, message]`
 */

function elements(selector, data) {
  if (typeof selector !== "string" || selector === "") {
    return [true, "Selector has to be a not-empty string"];
  }
  if (!Array.isArray(data)) {
    return [true, "Data has to be an array"];
  }
  if (data.length === 0) {
    return [true, "Data has to be a non-empty array"];
  }
  const elementsDOM = document.querySelector(selector);
  if (!elementsDOM) {
    return [true, "Could not found DOM element based on given selector"];
  }
  console.log(elementsDOM);
  let HTML = "";
  for (const element of data) {
    if (
      typeof element !== "object" ||
      element === null ||
      Array.isArray(element) ||
      !element.ul
    ) {
      continue;
    }
    HTML += `<h4>Nutritional benefits</h4>

    <ul>
      <ol>
        ${element.ul[0]}
      </ol>
      <ul>
      <ul>
      <ol>
        ${element.ul[1]}
      </ol>
      <ul>
      <ul>
      <ol>
        ${element.ul[2]}
      </ol>
      <ul>
      `;
  }
  elementsDOM.innerHTML = HTML;
  return true;
}

export { elements };
