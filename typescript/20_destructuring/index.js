"use strict";
// ========================= DESTRUCTURING =========================
// A desestruturação permite extrair propriedades de objetos ou elementos de arrays
// e atribuí-los a variáveis de forma concisa. No TypeScript, podemos também anotar o tipo dos dados.
// ========== EXEMPLO 1 ==========
// Durante a desestruturação de objetos, podemos indicar o tipo de dado esperado.
const { body } = document;
// ========== EXEMPLO 2 ==========
const objeto = {
    nome: "Notebook",
    preco: 2499.87,
};
function handleData({ nome, preco }) {
    console.log(`Produto: ${nome.toUpperCase()}, Preço: R$ ${preco.toFixed()}`);
}
handleData(objeto);
function handleData2({ nome, preco }) {
    console.log(`Produto: ${nome.toLocaleLowerCase()}, Preço: ${preco?.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })}`);
}
handleData2(objeto);
// ========== CONHECER OS DADOS ==========
// Na desestruturação, é necessário indicar o tipo exato dos dados.
// Exemplo: um "currentTarget" pode ser "EventTarget | null".
// ========== EXEMPLO 3 ==========
function handleClick({ currentTarget, pageX, }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML += `<h1>Click no eixo X: ${pageX}</h1>`;
    }
}
document.documentElement.addEventListener("click", handleClick);
// ========== EXEMPLO 3.1 ==========
// Utilizando a interface nativa "MouseEvent" para simplificar a anotação.
function handleClick2({ currentTarget, pageX }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML += `
      <h1>Toque no eixo X: ${pageX}</h1>
      <br>
    `;
    }
}
document.documentElement.addEventListener("click", handleClick2);
document.documentElement.addEventListener("touchstart", handleClick2);
// ========== OPERADOR REST ==========
// O operador REST (`...`) coleta múltiplos ARGUMENTOS ou elementos, retornando um array.
// Ele é usado para agrupar o restante dos elementos.
// ========== EXEMPLO 4 ==========
const [primeiro, ...resto] = [10, 20, 30, 40];
console.log("Primeiro:", primeiro); // 10
console.log("Restante:", resto); // [20, 30, 40]
// ========== EXEMPLO 5 ==========
function mostrarMaiorOuMenor(tipo, ...numeros) {
    if (tipo === "menor") {
        return Math.min(...numeros); // Spread operator
    }
    return Math.max(...numeros); // Spread operator
}
console.log(mostrarMaiorOuMenor("menor", 1, 87, 203, 39, 15)); // 1
console.log(mostrarMaiorOuMenor("maior", 1, 87, 203, 39, 15)); // 203
// ========== OPERADOR REST vs SPREAD OPERATOR ==========
// Ambos utilizam o operador `...`, mas têm finalidades diferentes:
// - REST: Coleta e agrupa os elementos em um array ou objeto.
// Exemplo:
function soma(...numeros) {
    return numeros.reduce((acc, curr) => acc + curr, 0);
}
console.log(soma(2, 87, 11, 32, 101)); // 233
// - SPREAD: Expande (espalha) os elementos de um array ou objeto.
// Exemplo:
const numeros = [1, 2, 3];
const novosNumeros = [...numeros, 4, 5];
console.log(novosNumeros); // [1, 2, 3, 4, 5]
const usuario = { nome: "Renard", idade: 32 };
const usuarioAtualizado = { ...usuario, cidade: "Santa Luzia" };
console.log(usuarioAtualizado); // { nome: 'Renard', idade: 32, cidade: 'Santa Luzia' }
// ========== RESUMO ==========
// Operador Rest (`...`):
// - Coleta o restante dos elementos
// - Usado em: `function(...args)`, `[...resto]`, `{...resto}`
// Operador Spread (`...`):
// - Espalha os elementos
// - Usado em: `[...array]`, `{...objeto}`
// Conclusão:
// O operador `...` é o mesmo visualmente, mas seu uso varia conforme o contexto:
// - **Rest** agrupa elementos.
// - **Spread** expande elementos.
