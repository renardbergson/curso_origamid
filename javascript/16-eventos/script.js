// addEventListener
// Atribui uma função a um elemento, essa função é chamada de "callback", que será ativada assim que o evento especificado ocorrer nesse elemento
// elemento.addEventListener(event, callback, options)
const menu = document.querySelector('.menu');
menu.addEventListener("click", () => { 
  console.log("Clicou no Menu");
})

// É uma boa prática separar a função de callback do atribuidor de eventos, ao invés de passá-la direto, como função anônima. Isso também permite que o atribuidor de eventos seja removido
// elemento.removeEventListener(event, callback, options)
const h2 = document.querySelector("h2");
function mostrarQueClicouNoH2() {
  console.log("Clicou no primeiro H2");
  h2.removeEventListener("click", mostrarQueClicouNoH2); // apenas referencia, não executa a função() !
  // só mostrará uma vez, depois remove
}
h2.addEventListener("click", mostrarQueClicouNoH2);

// Event
// O primeiro parâmetro do callback é um objeto, que contém várias propriedades e métodos relacionadas ao evento que ocorreu
// geralmente o "event" é referenciado apenas como "e"
// de qualquer forma, o nome é apenas para que seja condizente, com qualquer nome o funcionamento será o mesmo!
const h1 = document.querySelector("h1");
function mostrarEventoDeClickNoH1(event) {
  console.log(event);
  h1.removeEventListener("click", mostrarEventoDeClickNoH1);
}
h1.addEventListener("click", mostrarEventoDeClickNoH1);

// Propriedades do Event
const imagensAnimais = document.querySelector(".animais-lista");
function mostrarPropriedadesDoEvent(event) {
  console.log(event.currentTarget); // this (o elemento ao qual foi atribuido o evento)
  console.log(event.target); // onde o click ocorreu (em qual imagem o click ocorreu)
  console.log(event.type); // tipo do evento (click)
}
imagensAnimais.addEventListener("click", mostrarPropriedadesDoEvent);

// event.preventDefault
// É um método que previne o comportamento padrão do evento. No caso de um link externo, por exemplo, irá previnir que o link seja ativado. Em alguns casos, isso é bastante útil, principalmente no caso de implementar alguma verificação
const linkExterno = document.querySelector("a[href^='https']");
function handleLinkExterno(event) {
  event.preventDefault();
  console.log(`Link externo atribuido ao botão "Dev": ${event.currentTarget.href}`)
}
linkExterno.addEventListener("click", handleLinkExterno);

// this
// É uma palavra especial do JavaScript, que pode fazer referência a diferentes objetos, dependendo do contexto. No caso dos eventos, ela sempre fará referência ao elemento ao qual o eventListener foi atribuido
const a = document.querySelector("a");
function mostrarThis(e) {
  e.preventDefault();
  console.log(this);
  console.log(this.getAttribute('href')); // com this, podemos usar os mesmos métodos e propriedades de Element
}
a.addEventListener("click", mostrarThis);

// Demais eventos
// Existem diversos outros eventos como: "click", "scroll", "resize", "keydown", "keyup", "mouseenter", etc.
// Os eventos podem, inclusive, ser adicionados ao objeto window e também ao document!
function handleEvent(event) {
  console.log(event.type);
}
h1.addEventListener("mouseenter", handleEvent);
window.addEventListener("scroll", handleEvent);
window.addEventListener("resize", handleEvent);
window.addEventListener("keydown", handleEvent);

// Keyboard
// Através de elementos que interagem com o teclado, é possível adicionar atalhos para facilitar a navegação em um site
const faq = document.querySelector("a[href='#faq']");
function handleKeyboard(event) {
  if (event.key === "1") {
    console.log("Acessando a seção FAQ por atalho no teclado...")
    faq.click();
  }
}
window.addEventListener("keydown", handleKeyboard);

// forEach e Eventos
// O método addEventListener é adicionado a um único elemento, então é necessário um loop entre elementos de uma lista, para adicioná-lo a cada um deles
const todasImagens = document.querySelectorAll("img");
function mostrarSrc(e) {
  const src = e.currentTarget.getAttribute("src");
  console.log(`Atributo src da imagem clicada: ${src}`);
}
todasImagens.forEach(imagem => {
  imagem.addEventListener("click", mostrarSrc);
})

// EXERCÍCIOS
console.log("======== EXERCÍCIOS ========");
// Quando o usuário clicar nos links internos do site,
// adicione a classe "ativo" ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll("a[href^='#']");
function handleLinkInterno(e) {
  e.preventDefault();
  const linkClicado = e.currentTarget; 
  linksInternos.forEach(link => {
    link.classList.remove("ativo");
    linkClicado.classList.add("ativo");
  })
}
linksInternos.forEach(link => {
  link.addEventListener("click", handleLinkInterno);
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elements = document.querySelectorAll("body *"); // todos os elementos dentro do body 
const handleElements = e => console.log(e.currentTarget);
elements.forEach(element => element.addEventListener("click", handleElements)); // alterar para a próxima

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removerElementos(e) {
  e.currentTarget.remove();
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site
function handleFontSize(e) {
  if (e.key === "t") {
    // AUMENTAR CONTINUAMENTE
    /*     
      elements.forEach(item => {
      const style = window.getComputedStyle(item, null).getPropertyValue("font-size")
      const currentSize = parseFloat(style);
      item.style.fontSize = (currentSize + 2) + "px";
      }) 
    */

    // AUMENTAR E REMOVER TAMANHO FIXO
    // Como utilizamos unidades relativas em todas as propriedades "font-size", podemos incrementar o font-size do HTML com porcentagem e, todos os demais elementos do documento serão alterados. Faremos isso adicionando uma classe CSS no HTML
    const html = document.documentElement.classList.toggle("textoMaior"); // "documentElement" = HTML
  }
}
window.addEventListener("keydown", handleFontSize);