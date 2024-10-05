// ============== EXERCÍCIOS ==============
console.log("========= EXERCÍCIOS =========");
// 1 - Retorne a soma total de caracteres dos parágrafos utilizando reduce
const paragrafos = document.querySelectorAll("p");
const somaCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  const caracteres = item.innerText.length;
  return acumulador + caracteres;
}, 0)

console.log("Total de caracteres dos parágrafos:", somaCaracteres);

// 2 - Crie uma função que retorne novos elementos html, com os seguintes parâmetros: 
// a - tag, 
// b - classe 
// c - conteudo 
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerText = conteudo : null;
  return elemento;
}

console.log(criarElemento("li", "itemLista", "Este é o conteúdo da tag"));

// 3 - Crie uma nova função, utilizando a anterior como base
// Essa nova função deverá sempre criar h1 com a classe "titulo", porém, o parâmetro conteudo continuará dinâmico

// * perceba: estamos referenciando a função anterior mas, ao mesmo tempo, criando uma nova (h1), pronta para ser ativada posteriormente e receber um terceiro parâmetro *
const h1 = criarElemento.bind(null, "h1", "titulo");

const cursoJS = h1("Curso de JavaScript"); // 3º parâmetro
const cursoTS = h1("Curso de TypeScript"); // 3º parâmetro

console.log(cursoJS);
console.log(cursoTS);