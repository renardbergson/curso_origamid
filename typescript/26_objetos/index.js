"use strict";
// ==================== OBJETOS ====================
const produto1 = {
    nome: "notebook",
    quantidade: 10,
    cor: "preto", // Propriedade extra em relação à interface Produto.
};
function mostrarProduto(produto) {
    console.log("Quantidade do produto no estoque: " + produto.quantidade);
}
mostrarProduto(produto1);
// É possível ter propriedades a mais, porém nunca a menos! 💡
// No exemplo a seguir temos uma propriedade a mais (preco) em relação à interface "Produto", mas falta a propriedade "quantidade".
// Caso necessário, é possível tornar "quantidade" opcional na interface.
const servico = {
    nome: "Instalação de ar-condicionado",
    preco: 300,
};
// mostrarProduto(servico); 🔴 Erro: A propriedade 'quantidade' está ausente no tipo '{ nome: string; preco: number; }', mas é obrigatória no tipo 'Produto'.
// ========== PARTIAL ==========
// O TypeScript conta com "utility types" que são funções capazes de transformar uma interface ou tipo em outra.
// Por exemplo, através da sintaxe: "Partial<Tipo>", é possível indicar que todas as propriedades de uma interface serão opcionais.
function mostrarQuantidadeComPartial(produto) {
    console.log(produto.quantidade ?? null); // Usando o operador de coalescência nula.
}
mostrarQuantidadeComPartial(servico); // null, mas agora foi possível passar "servico" como argumento.
mostrarQuantidadeComPartial({}); // null
const artigo = {
    titulo: "Como aprender HTML",
    visualizacoes: 3000,
    tags: ["HTML", "Front-end"],
    autor: "Renard Bergson", // Propriedade extra.
    ano: 2024,
};
console.log(artigo);
// Reflexão sobre o uso de propriedades extras:
console.log(artigo.descricao); // undefined
console.log(artigo.asuhausuahus); // undefined
function mostrarTitulo(obj) {
    if ("titulo" in obj) {
        console.log(obj.titulo);
    }
}
// mostrarTitulo(200); 🔴 Erro: "Cannot use 'in' operator to search for 'titulo' in 200".
mostrarTitulo({ titulo: "Aprendendo TypeScript" });
// ========== DEMAIS UTILITY TYPES ==========
// https://www.typescriptlang.org/docs/handbook/utility-types.html
