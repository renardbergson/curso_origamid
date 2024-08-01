const animaisMenu = document.querySelectorAll(".js-animaisMenu li");
const animaisDescricao = document.querySelectorAll(".js-animaisDescricao section");
const accordionList = document.querySelectorAll(".js-accordion dt");
const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
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

function scrollSuave() {
  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        let topo = section.offsetTop;
  
        window.scrollTo({
          top: topo + 80, // deixar mais próximo do elemento
          behavior: "smooth"
        });
  
        // ALTERNATIVA
        /* section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }); */
      })
    })
  }
}

mostrarDescricaoAnimal();
initAccordion()
scrollSuave()