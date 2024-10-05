// ================= EXERCÍCIOS =================
// 1 - Crie uma função que verifique corretamente o tipo de dado
console.log("============ EXERCÍCIOS ============");
function verificarTipoDado(objeto) {
  return Object.prototype.toString.call(objeto);
}
const frase = "Sou um exemplo de frase!";
console.log(verificarTipoDado(frase));

// 2 - Crie um objeto "quadrado" com a propriedade "lados" e torne ela imutável
const quadrado = {};
Object.defineProperty(quadrado, "lados", {
  value: 4,
  enumerable: true
  // "configurable" já é falso por padrão, só de inserir as propriedades através de "defineProperty"
})

delete quadrado.lados; // nada muda...
quadrado.lados = 6; // nada muda...
console.log(quadrado);

// 3 - Previna qualquer mudança no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);
console.log(configuracao);

// 4 - Liste o nome de todas as propriedades do protótipo de String e Array
const _string = Object.getOwnPropertyNames(String.prototype);
const _array = Object.getOwnPropertyNames(Array.prototype);

console.log("Propriedades do protótipo de String:", _string);
console.log("Propriedades do protótipo de Array:", _array);