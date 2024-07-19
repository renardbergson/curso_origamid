// clientHeight, offsetHeight, scrollHeight, clientWidth, offsetWidth, scrollWidth
// São propriedades e métodos dos objetos Element e HTMLElement, a maioria deles são read-only
const animaisLista = document.querySelector(".animais-lista");
const altura = animaisLista.clientHeight; // height + padding
const alturaComBorda = animaisLista.offsetHeight; // height + padding + border
const alturaTotal = animaisLista.scrollHeight; // height total + o scroll interno do elemento, se tiver

console.log(`Altura da parte de scroll dos animais: ${altura}px`);
console.log(`Altura da parte de scroll dos animais, contando com a borda: ${alturaComBorda}px`);
console.log(`Altura da parte de scroll dos animais, contando com a borda e o scroll: ${alturaTotal}px`);
// * o mesmo vale para o Width: clientWidth, offsetWidth, scrollWidth... *

// offsetTop e offsetLeft
const distanciaDoTopo = animaisLista.offsetTop; // distância entre o elemento e o topo de página
const distanciaDaEsquerda = animaisLista.offsetLeft; // distância entre o elemento e a esquerda da página

console.log(`Distância da parte de scroll dos animais em relação ao topo da página: ${distanciaDoTopo}px`);
console.log(`Distância da parte de scroll dos animais em relação à esquerda da página: ${distanciaDaEsquerda}px`);

// getBoundingClientRect()
// Método que retorna um objeto com valores de Width, Height, distâncias do elemento e mais
const primeiroH2 = document.querySelector('h2');
const rect = primeiroH2.getBoundingClientRect();
const alturaRect = rect.height; // height do elemento
const larguraRect = rect.width; // width do elemento
const distanciaTopoRect = rect.top; // distância entre o topo do elemento e o scroll

console.log(rect);
console.log(`Altura do h2 "Raposa": ${alturaRect}px`);
console.log(`Largura do h2 "Raposa": ${larguraRect}px`);
console.log(`Distância entre o h2 "Raposa" e o scroll Y: ${distanciaTopoRect}px`);
distanciaTopoRect < 0 ? console.log("!!!!!!!! O scroll passou do h2 'Raposa'! !!!!!!!!") : null;

// window
const larguraJanela = window.innerWidth; // width da janela
const larguraTotalJanela = window.outerWidth; // width da janela + dev tools
const alturaJanela = window.innerHeight; // altura da janela
const alturaTotalJanela = window.outerHeight; // altura da janela + barra de endereço
const distanciaScrollY = window.scrollY;
const distanciaScrollX = window.scrollX;

console.log(`Largura atual da janela: ${larguraJanela}px`);
larguraJanela < 600 ? console.log("!!!!!! A tela é menor que 600px !!!!!!") : null;
console.log(`Largura atual da janela + o dev tools: ${larguraTotalJanela}px`);
console.log(`Altura atual da janela: ${alturaJanela}px`);
console.log(`Altura atual da janela + barra de endereço: ${alturaTotalJanela}px`);
console.log(`Distância atual do scroll Y: ${distanciaScrollY}px`);
console.log(`Distância atual do scroll X: ${distanciaScrollX}px`);

// matchMedia()
// utilize um media-querie, como no CSS, para verificar a largura do browser
// o ideal é não utilizar o innerWidth, porque existem valores diferentes, de acordo com o browser
const telaSmartphone = window.matchMedia('(max-width: 600px)').matches; // retorna uma propriedade "matches", com valor booleano true, se o tamanho da tela tiver no máximo a medida informada ou false, se o tamanho da tela passar da medida informada
console.log(telaSmartphone);
telaSmartphone ? console.log("!!!!!! Tela tamanho de Smartphone !!!!!!") : console.log("!!!!!! Tela tamanho maior que de Smartphone !!!!!!");

// EXERCÍCIOS
// Verifique a distância da primeira imagem
// em relação ao topo da página
console.log("====== EXERCÍCIOS ======");

const primeiraImagem = document.querySelector('img');
console.log(`Distância da primeira imagem em relação ao topo da página: ${primeiraImagem.offsetTop}px`);

// Retorne a soma da largura de todas as imagens
const imagens = document.querySelectorAll('img');
function somarWidthImages() {
  let soma = 0;
  imagens.forEach((imagem, index) => {
    const largura = imagem.getBoundingClientRect().width;
    soma += largura;
    index === --imagens.length ? console.log(`Soma da largura de todas as imagens: ${soma}px`) : null;
  });
}

// às vezes, o JS carrega primeiro do que as imagens, podendo ocasionar o retorno de alguns valores iguais a zero, por isso, utilizamos o método "onload" do objeto window, isso garante que os processos a seguir só seja executados após todo o carregamento
window.onload = () => {
  somarWidthImages();
  verificarAcessibilidadeLinks();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
function verificarAcessibilidadeLinks() {
  links.forEach((link, index) => {
    const width = link.offsetWidth;
    const height = link.offsetHeight;
    if (width >= 48 && height >= 48) {
      console.log(link, `Possui boa acessibilidade`);
      return;
    } else {
      console.log(link, `Não possui boa acessibilidade`);
    }
  });
}

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia("(max-width: 720px)").matches; // true or false
const menu = document.querySelector(".menu");

if (browserSmall && !menu.classList.contains("menu-mobile")) {
  menu.classList.add("menu-mobile");
  console.log("Classe 'menu-mobile' adicionada ao Menu")
} 