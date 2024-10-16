const handleTooltip = () => {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", handleMouseOver);
  })

  function handleMouseOver(event) {
    // "this" será qualquer elemento da nodeList "tooltips" 💡
    const tooltipBox = handleTooltipBox(this); 

    // podemos passar um objeto como callback de um eventListener, desde que o objeto tenha um método chamado "handleEvent", que será ativado quando o evento ocorrer 💡
    
    // MOUSE MOVE
    handleMouseMove.tooltip = tooltipBox; // adicionando "tooltipBox" ao objeto, na propriedade "tooltip" 💡
    this.addEventListener("mousemove", handleMouseMove);

    // MOUSE LEAVE
    handleMouseLeave.tooltip = tooltipBox; // adicionando "tooltipBox" ao objeto, na propriedade "tooltip" 💡
    handleMouseLeave.mapa = this; // adicionando "this" (mapa) ao objeto, na propriedade "mapa" 💡
    this.addEventListener("mouseleave", handleMouseLeave);
  }

  function handleTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const elementText = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = elementText;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  const handleMouseMove = {
    // tooltip: div criada e estilizada

    handleEvent(event) {
      this.tooltip.style.top = event.pageY + 20 + "px"; // posição do mouse em relação ao eixo Y 💡
      this.tooltip.style.left = event.pageX + 20 + "px"; // posição do mouse em relação ao eixo X 💡
    }
  }

  const handleMouseLeave = {
    // tooltip: div criada e estilizada,
    // mapa: "this", oriundo da nodeList "tooltips", o mapa

    handleEvent() {
      // removendo elemento tooltip do DOM
      this.tooltip.remove();

      // removendo os seguintes eventos, para que não continuem existindo, depois que o mouse sair 
      // é possível acompanhar tudo isso através da aba "Event Listener", no inspecionar do Chrome 💡
      this.mapa.removeEventListener("mousemove", handleMouseMove);
      this.mapa.removeEventListener("mouseleave", handleMouseLeave);
    }
  }
}

export default handleTooltip;