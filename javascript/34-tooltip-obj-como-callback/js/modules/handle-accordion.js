const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
import nomeClasse from "../script.js";

function initAccordion() {
  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");
    
    accordionList.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle(nomeClasse);
        item.nextElementSibling.classList.toggle(nomeClasse);
      })
    })
  }
}

export default initAccordion;