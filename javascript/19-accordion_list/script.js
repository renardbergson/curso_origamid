const animaisMenu = document.querySelectorAll(".js-animaisMenu li");
const animaisDescricao = document.querySelectorAll(".js-animaisDescricao section");
const accordionList = document.querySelectorAll(".js-accordion dt");
const className = "ativo";

function initAccordion() {
  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");
    
    accordionList.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle(className);
        item.nextElementSibling.classList.toggle(className);
      })
    })
  }
}

function mostrarDescricaoAnimal() {
  if (animaisMenu.length && animaisDescricao.length) {
    animaisDescricao[0].classList.add(className);
    
    function ativarDescricao(index) {
      animaisDescricao.forEach((descricao) => {
        descricao.classList.remove(className);
      })
      animaisDescricao[index].classList.add(className);
    }
    
    animaisMenu.forEach((item, index) => {
      item.addEventListener("click", () => ativarDescricao(index));
    })
  }
}

mostrarDescricaoAnimal();
initAccordion()