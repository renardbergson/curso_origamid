function aula17() {
  // outerHTML, innerHTML, innerText
  // Propriedades que retornam uma string contendo o HTML ou Texto de um elemento. Elas não são read-only, de modo que é possível atribuir-lhes um novo valor
  const menu = document.querySelector(".menu");
  console.log(menu.outerHTML); // refere-se ao próprio elemento e ao HTML que o compõe
  console.log(menu.innerHTML); // refere-se ao HTML interno do elemento (filhos)
  console.log(menu.innerText); // refere-se ao texto interno dos elementos filhos 
  
  const titulo1 = document.querySelector("h1");
  titulo1.innerText = "<p>Teste</p>"; // reconhece tudo como texto, altera o texto sem modificar a tag
  titulo1.innerHTML = "<p>Teste</p>" // renderiza em HTML, diferenciando tags de texto simples
  
  // Tranversing
  // Diz respeito à navegação ao longo da árvore do DOM
  const lista = document.querySelector(".animais-lista");
  console.log(lista.parentElement); // elemento pai
  console.log(lista.parentElement.parentElement); // pai do pai
  console.log(lista.previousElementSibling); // elemento acima
  console.log(lista.nextElementSibling); // elemento abaixo
  
  console.log(lista.children); // HTML Collection contendo os filhos
  console.log(lista.children[0]); // primeiro filho
  console.log(lista.children[--lista.children.length]); // último LI filha

  // é possível continuar selecionando, dentro de um elemento já selecionado
  console.log(lista.querySelectorAll("li")); // todas as LI's (nodeList)
  console.log(lista.querySelector("li:last-child")); // última LI filha 

  // Element x Node
  // Element: representa um elemento HTML, ou seja, uma tag
  // Node: representa um nó, que pode ser um Element, texto, comentário, quebras de linha (text) e mais
  // É bem mais comum selecionar Elementos HTML
  console.log(lista.childNodes[1]); // comentário inserido no html
  console.log(lista.firstChild);  // primeira quebra de linha
  console.log(lista.childNodes); // todos os node child

  // Manipulando Elementos
  // É possível remover elementos do Dom com métodos de Node
  const contato = document.querySelector(".contato");
  const tituloContato = contato.querySelector(".titulo");
  
  contato.appendChild(lista); // move "lista" para o final "contato"
  contato.insertBefore(lista, tituloContato) // dentro de "contato", insere "lista" antes de "tituloContato"
  contato.removeChild(tituloContato); // dentro de "contato", remove "tituloContato"
  contato.replaceChild(titulo1, lista); // dentro de "contato", substitui "lista" por "titulo1"

  // Novos Elementos
  // Podemos criar novos elementos com o método "createElement()"
  const animais = document.querySelector(".animais");

  const novoH1 = document.createElement("h1");
  novoH1.innerText = "Novo Título";
  novoH1.classList.add("titulo");
  
  animais.insertBefore(novoH1, document.querySelector(".animais-descricao"));

  // Clonar Elementos
  // Todo elemento selecionado é único. Para criar um novo elemento baseado em outro, é necessário utilizar o método "cloneNode()"
  /* 
    Exemplos:
    
    const titulo = document.querySelector("h1");
    const titulo2 = document.querySelector("h1");
    const novoTitulo = titulo;

    "titulo", "titulo2" e "novoTitulo" apontam para o mesmo elemento, assim, alterar um deles significa modificar exatamente o mesmo elemento
  */
 const cloneDoTitulo = titulo1.cloneNode(true); // o booleano diz se queremos ou não clonar os filhos também
 cloneDoTitulo.innerText = "Clone do Título";
 contato.appendChild(cloneDoTitulo);
}

function exercicios() {
  console.log("======== EXERCÍCIOS ========"); 
  // Duplique o menu e adicione ele no footer
  const cloneMenu = document.querySelector(".menu").cloneNode(true);
  const footer = document.querySelector(".footer")
  footer.appendChild(cloneMenu);
  console.log("Menu principal duplicado e adicionado ao footer");
  
  // Selecione o primeiro DT da dl de Faq
  const faqLista = document.querySelector(".faq-lista");
  const primeiroDt = faqLista.querySelector("dt");
  console.log(primeiroDt.innerText);
  
  // Selecione o DD referente ao primeiro DT
  const primeiroDd = primeiroDt.nextElementSibling;
  console.log(primeiroDd.innerText);
  
  // Substitua o conteúdo html de .faq pelo de .animais
  const faq = document.querySelector(".faq");
  const htmlAnimais = animais.innerHTML;
  faq.innerHTML = htmlAnimais;
}


window.onload = () => {
  aula17();
  exercicios();
};