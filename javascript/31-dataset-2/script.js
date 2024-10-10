const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
const linksInternos = document.querySelectorAll("[data-content='menu'] a[href^='#']");

const sections = document.querySelectorAll("[data-anime='fade']");
const nomeClasse = "ativo";

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

function scrollSuave() {
  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        let topo = section.offsetTop;
  
        window.scrollTo({
          top: topo,
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

function initAnimacaoScroll() {
  const porcentagemAlturaTela = window.innerHeight * 0.4; 
  // 50% da altura interna da janela
  // quanto maior a porcentagem, menor será o espaço até o topo do elemento

  function animaScroll() {
    sections.forEach((item, index) => {
      const topo = item.getBoundingClientRect().top;
      const distanciaDesejada = (topo - porcentagemAlturaTela) < 0;

      if (distanciaDesejada) {
        item.classList.add(nomeClasse);
      } else {
        item.classList.remove(nomeClasse);
      }
    })
  }

  window.addEventListener("scroll", animaScroll);
  animaScroll(); // animar a primeira, antes mesmo do scroll
}

initAccordion();
scrollSuave();
initAnimacaoScroll();