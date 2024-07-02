// O QUE É O DOM (Document Object Model)
// É uma interface que representa documentos HTML e XML através de objetos
// Com ela é possível manipular a estrutura, estilo e conteúdo desses documentos
console.log(window);
// "window" é o objeto global do browser
// se é um objeto, possui diferentes métodos e propriedades
const alturaPagina = window.innerHeight; // retorna a altura do documento no brower
const enderecoPagina = window.location.href; // mostra o endereço da página atual
if (enderecoPagina === "http://127.0.0.1:5500/") {
  console.log("O arquivo da aula está aberto");
}

// WINDOW E DOCUMENT
// São os principais objetos do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades
// window é um objeto global, então, não é obrigatório chamá-lo sempre antes dos seus métodos e propriedades

// window.alert("Bem-vindo à aula"); // é o mesmo que: alert("Bem-vindo à aula")
document.body; // retorna o body

// NODE
// Toda tag html é representada pelo objeto Element e, por isso, herda os seus métodos e propriedades. Element é um tipo de objeto Node.
const tituloPagina = document.querySelector("h1"); // seleciona o primeiro h1
tituloPagina.innerText; // retorna o texto da tag
tituloPagina.classList; // retorna as classes presentes na tag (array like)
tituloPagina.id; // retorna os IDs presentes na tag (array like)
tituloPagina.offsetHeight; // retorna a altura do elemento

// EXERCÍCIOS
console.log("========== EXERCÍCIOS ==========");
// Retorne o url da página atual utilizando o objeto window
console.log(window.location.href);
// Seleciona o primeiro elemento da página que
// possua a classe "ativo"
const ativo = document.querySelector(".ativo");
console.log(ativo);

// Retorne a linguagem do navegador
console.log(window.navigator.language);

// Retorne a largura da janela
console.log(window.innerWidth);
