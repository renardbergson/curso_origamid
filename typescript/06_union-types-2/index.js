"use strict";
// ========================= UNION TYPES =========================
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
// Observe que, na função a seguir utiliza-se o conceito de "type guards"
// Type Guards (guardas de tipo) são técnicas que permitem refinar e garantir o tipo de uma variável dentro de um bloco de código, como condicionais. Eles ajudam a lidar de maneira segura com tipos em Union Types, checando o tipo de valor em tempo de execução, o que permite verificar qual tipo de dado está sendo manipulado em diferentes blocos de código. 💡
function toNumber(value) {
    if (typeof value === "string") {
        return Number(value); // converte string para número
    }
    if (typeof value === "number") {
        return value; // retorna o número diretamente
    }
    throw new Error("value deve ser um número ou uma string"); // lança um erro
}
// Exemplo de uso:
console.log(toNumber("200")); // 200
console.log(toNumber(200)); // 200
console.log(toNumber(true)); // Lança um erro
