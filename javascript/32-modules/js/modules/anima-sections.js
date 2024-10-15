const sections = document.querySelectorAll("[data-anime='fade']");
import nomeClasse from "../script.js";

function animaSections() {
  const porcentagemAlturaTela = window.innerHeight * 0.4; 
  // 40% da altura interna da janela
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

export default animaSections;