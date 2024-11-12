"use strict";
// ========================= USER TYPE GUARD 2 =========================
// ===== OBJETOS =====
// O Type Predicate pode ser utilizado para adicionar Type Guards a objetos específicos,
// verificando se eles possuem certas propriedades e garantindo a Type Safety (segurança de tipo).
// Apenas moldar o dado recebido com uma interface não traz a segurança de tipo necessária.
// Isso ocorre porque, ao fazer apenas a tipagem com uma interface, o TypeScript assume
// que o dado possui o formato esperado, mas não faz uma verificação em tempo de execução.
// Para confirmar isso, experimente alterar "notebook" para qualquer outro nome na URL da API.
// Nesse caso, os retornos das propriedades serão "undefined", pois o dado não possui o formato esperado.
// Além disso, não podemos usar "data instanceof Produto" para verificar o tipo,
// já que o resultado de uma requisição de API é um objeto genérico (não instância de uma classe).
// Por isso, o uso de Type Predicate se torna ideal para validação.
// ===== EXEMPLO =====
async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const json = await response.json();
    handleProduto(json);
}
fetchProduto();
// ===== TYPE GUARD COM TYPE PREDICATE =====
function isProduto(value) {
    return (value !== null && // value não é "null"
        typeof value === "object" && // value é do tipo "object"
        "nome" in value && // value tem uma propriedade chamada "nome"
        "preco" in value && // value tem uma propriedade chamada "preco"
        typeof value.nome === "string" && // "nome" é do tipo "string"
        typeof value.preco === "number" // "preco" é do tipo "number"
    );
}
// ===== FUNÇÃO DE MANIPULAÇÃO DO PRODUTO =====
function handleProduto(data) {
    if (isProduto(data)) {
        document.body.innerHTML += `
      <hr>
      <p>${data.nome}</p>
      <p>${data.preco}</p>
    `;
    }
    else {
        console.error("O dado recebido não possui o formato esperado de Produto.");
    }
}
