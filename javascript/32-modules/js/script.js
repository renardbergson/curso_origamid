// =================== MODULES ===================
// Dividir o código em diferentes arquvos, com funções específicas (módulos) facilita a manutenção
// Antes existiam ferramentas que permitiam isso (como o Parcel) mas agora tornou-se algo nativo do JS

// 1 - TYPE MODULE
//Para trabalhar com modules, basta adicionar "type='module'" na tag script do HTML
/*  
  <script type="module" src="js/script.js"></script>
*/

// 2 - EXPORT DEFAULT
// Ao utilizar a palavra "default",  depois de "export", estamos sinalizando que aquele elemento será o único a ser exportado pelo arquivo
/*  
  export default function teste() {
    ...
  };
*/

// 3 - NAMED EXPORTS
// Podemos exportar mais de um elemento! Dessa forma, ao importá-los, basta utilizar chaves para especificar cada valor (destructuring assignment). 
// Outra abordagem para isso é exportar todos os elementos dentro de um objeto e depois acessá-lo desestruturando (como mostrado anteriormente) ou acessar o nome de cada elemento dentro dele, utilizando ponto (.), já que, neste caso, o elemento principal importado será, de fato, um objeto
/*  
  A - EXPORT
  export function scrollSuave() {};
  export const ano = 2000;
  export const obj = {nome: 'Ford'};
  export const str = 'Frase';
  export class Carro {};

  ou...

  export {
    funcao1,
    funcao2,
    variável1,
    ...
  }

  B - IMPORT
  import { scrollSuave, scrollAnimacao } from './scroll.js';
  scrollSuave();
  scrollAnimacao();

  ou...

  import nomePrincipal from './scroll.js';
  nomePrincipal.scrollSuave()
  nomePrincipal.scrollAnimacao()
*/

// 4 - ELEMENTOS EXPORTADOS
// É possível exportar objetos, funções, classes, números, strings e mais!
/*  
  // arquivo configuracao.js
  export function scrollSuave() {};
  export const ano = 2000;
  export const obj = {nome: 'Ford'};
  export const str = 'Frase';
  export class Carro {};

  // arquivo script.js
  import * as conf from './configuracao.js'; (perceba que importamos tudo (*) e renomeamos!)
  conf.str;
  conf.obj;
  conf.ano;
*/

// 5 - CARACTERÍSTICAS DOS IMPORTS/MÓDULOS
// I - Mesmo que importados em mais de um lugar, cada arquivo só é carregado uma vez
// II - Por padrão, todo arquivo js do tipo module utiliza modo estrito ("use strict")
  // A - nome = "ford"; 🔴 (use strict não permite a criação de variáveis globais)
  // B - delete Array.prototype; 🔴 (use strict sinaliza que não é possível esse tipo de exclusão)
  // C - window.top = 200; 🔴 (use strict sinaliza que não é possível alterar propriedades imutáveis)
  // D - const arguments = 3.14; 🔴 (use strict sinaliza que não é possível declarar variável com palavra-chave)
// III - As variáveis só existem dentro dos módulos (não vazam para o escopo global)
// IV - * Dentro de um arquivo js do tipo module e fora de um objeto, "this" faz referência a undefined! *
// V - O carregamento dos módulos é assíncrono! Apesar da execução seguir a ordem definida, o carregamento não necessariamente segue uma sequência

import mostrarDescricaoAnimal from "./modules/mostrar-descricao-animais.js";
import animaSections from "./modules/anima-sections.js";  
import scrollSuave from "./modules/scroll-suave.js";
import initAccordion from "./modules/accordion.js";

const nomeClasse = "ativo"; // nome de classe ulitazada nos módulos

export default nomeClasse; 

mostrarDescricaoAnimal(); 
animaSections();
scrollSuave();
initAccordion();