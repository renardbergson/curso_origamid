// =================== TOOLTIP ===================
// Tooltip é uma pequena caixa de texto que aparece quando o usuário passa o mouse sobre um elemento ou foca nele. Seu objetivo é fornecer informações adicionais sobre o item sem ocupar espaço na interface.
/* 
  Geralmente são usados para:

  I - Explicar funcionalidades que podem não ser óbvias
  II - Fornecer dicas sobre o uso de uma ferramentas ou recurss
  III - Mostrar informações extras sem sobrecarregar a tela
*/

import mostrarDescricaoAnimal from "./modules/mostrar-descricao-animais.js";
import animaSections from "./modules/anima-sections.js";  
import scrollSuave from "./modules/scroll-suave.js";
import handleAccordion from "./modules/handle-accordion.js";
import handleModal from "./modules/handle-modal.js";
import handleTooltip from "./modules/tooltip.js";

const nomeClasse = "ativo"; // nome de classe ulitazada nos módulos

export default nomeClasse; 

mostrarDescricaoAnimal(); 
animaSections();
scrollSuave();
handleAccordion();
handleModal();
handleTooltip();