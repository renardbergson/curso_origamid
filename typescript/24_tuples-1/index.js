"use strict";
// ========================= TUPLES =========================
// Em TypeScript, Tuples (tuplas) são arrays que possuem:
// - Dados em posições fixas.
// - Tipos específicos definidos para cada posição.
// ===================== ARRAYS x TUPLES =====================
// **Array**
// - Pode armazenar valores de diversos tipos (com uso de `any[]`) ou de um mesmo tipo (ex.: `string[]`).
// - O tamanho é flexível, podendo ser alterado.
// - Tipagem fora dos brackets: string[], number[], (string | number)[], etc. 💡
const frutas = ["Maçã", "Banana", "Morango"];
frutas.push("Cacau");
console.log(frutas); // ["Maçã", "Banana", "Morango", "Cacau"]
// **Tuple**
// - Armazena valores de tipos específicos em uma ordem fixa.
// - O tamanho é definido e pode ser imutável usando `readonly` ou `as const`.
// - Tipagem dentro dos brackets. Ex.: [string, string, number] 💡
// -------------------- Cenário A --------------------
// Quando a tipagem ocorre por **inferência**, o operador `as const` transforma o valor em:
// 1. Um tipo literal.
// 2. Uma tupla imutável (readonly).
const user = ["Esdras", 20];
// user.push("Estudante"); // 🔴 Erro: A propriedade 'push' não existe no tipo 'readonly ["Esdras", 20]'
console.log(user); // ["Esdras", 20]
// -------------------- Cenário B --------------------
// Com tipagem **manualmente definida**, apenas o `as const` não torna a tupla readonly.
// É necessário adicionar explicitamente o operador `readonly`.
const roles = ["admin", "user", "guest"];
// roles.push("editor"); // 🔴 Erro: A propriedade 'push' não existe no tipo 'readonly [string, string, string]'
console.log(roles); // ["admin", "user", "guest"]
// ===================== MAIS EXEMPLOS =====================
// Exemplo 1: Array com tipos mistos
// No exemplo a seguir, anotamos que "produto1" é um array que pode conter string **OU** número.
const produto1 = ["Notebook", 2500];
produto1[0]; // (.) sugere apenas as propriedades comuns aos tipos string e number 💡
const nome1 = produto1[0]; // const nome1: string | number 💡
// Exemplo 2: Tupla com tipos fixos
// Anotamos que "produto2" é uma tupla que possui no primeiro elemento uma string **E** no segundo, um número.
const produto2 = ["Notebook", 2500];
produto2[0].toUpperCase(); // sugere as propriedades inerentes ao tipo string 💡
const nome2 = produto2[0]; // const nome2: string 💡
// Exemplo 3: Desestruturação
// É comum no React, quando queremos acessar diretamente os valores de uma tupla.
const [nome, preco] = produto2;
console.log(nome, preco); // Notebook 2500
nome; // const nome: string
preco; // const preco: number
// Exemplo 4: Uso do `as const`
// O operador "as const" torna um dado "readonly", impedindo modificações.
// Em métodos que retornam arrays, transforma o resultado em Tuplas readonly 💡.
// No exemplo abaixo, seria possível alcançar quase o mesmo objetivo anotando o retorno
// como uma Tupla, mas "button" NÃO se tornaria readonly. 💡
// A) Sem `as const`
function pegarTexto(seletor) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
        return [elemento, elemento.innerText];
    }
    else {
        return null;
    }
}
const button = pegarTexto("button"); // const button: (string | HTMLElement)[] | null 💡
console.log(button);
// B) Com `as const`
function pegarTexto2(seletor) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
        return [elemento, elemento.innerText];
    }
    else {
        return null;
    }
}
const button2 = pegarTexto2("button"); // const button2: readonly [HTMLElement, string] | null 💡
console.log(button2);
