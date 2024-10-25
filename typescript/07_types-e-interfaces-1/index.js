"use strict";
// ========================= TYPES E INTERFACES =========================
// ============ OBJECT ============
// Definindo a forma (shape) de um objeto diretamente nas anotações de tipo.
// Usamos uma sintaxe similar à de um objeto normal.
/*
  VANTAGENS:
    I - O TypeScript informa exatamente o que deve ser preenchido ao chamar a função.
    II - Sugestões de autocomplete são fornecidas ao preencher os dados do objeto.
    
  DESVANTAGENS:
    I - A função pode se tornar complexa e o código acoplado.
    II - Abordagem ruim caso o objeto tenha muitas propriedades.
*/
function mostrarDadosPessoa(dados) {
    document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>${dados.idade}</p>
      <p>${dados.area}</p>
    </div>
    <hr />
  `;
}
mostrarDadosPessoa({
    nome: "Renard Bergson",
    idade: 32,
    area: "Front-End",
});
mostrarDadosPessoa({
    nome: "Esdras Medeiros",
    idade: 20,
    area: "Front-End",
});
let total = 10; // Pode ser um número
total = "10"; // Ou uma string
function mostrarDadosProduto(dados) {
    document.body.innerHTML += `
    <div>
      <h2>${dados.nome}</h2>
      <p>${dados.preco}</p>
      <p>Inclui teclado: ${dados.teclado ? "Sim 🟢" : "Não 🔴"}</p>
    </div>
    <hr />
  `;
}
const desktop = {
    nome: "Computador de Mesa",
    preco: 3500,
    teclado: false,
};
mostrarDadosProduto(desktop);
function mostrarCurso(curso) {
    console.log("Curso escolhido: " + curso);
}
mostrarCurso("história"); // Só aceita strings do tipo "Cursos"
const notebook = {
    nome: "Notebook",
    preco: 5000,
    teclado: true,
};
mostrarDadosProduto(notebook);
// ============ TYPE x INTERFACE ============
// A princípio:
// - "interface" para moldar objetos e classes.
// - "type" para outros tipos de dados, como primitivos e union types.
