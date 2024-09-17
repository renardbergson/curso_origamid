// ============== EXERCÍCIOS ==============
console.log("========= EXERCÍCIOS =========");
// Retorne a soma total de caracteres dos parágrafos utilizando reduce
const paragrafos = document.querySelectorAll("p");
const somaCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  const caracteres = item.innerText.length;
  return acumulador + caracteres;
}, 0)

console.log("Total de caracteres dos parágrafos:", somaCaracteres);

// Crie uma função que retorne novos elementos html, com os seguintes parâmetros: 
// I - tag, 
// II - classe 
// III - conteudo 
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerText = conteudo : null;
  return elemento;
}

console.log(criarElemento("li", "itemLista", "Este é o conteúdo da tag"));

// Crie uma nova função, utilizando a anterior como base
// Essa nova função deverá sempre criar h1 com a classe "titulo", porém, o parâmetro conteudo continuará dinâmico
const h1 = criarElemento.bind(null, "h1", "titulo");

const cursoJS = h1("Curso de JavaScript"); // 3º parâmetro
const cursoTS = h1("Curso de TypeScript"); // 3º parâmetro

console.log(cursoJS);
console.log(cursoTS);