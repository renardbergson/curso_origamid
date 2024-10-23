"use strict";
// ========================= STRING, NUMBER E BOOLEAN =========================
// string, number e boolean são os tipos básicos do TypeScript (primitivos)
const frase = "Vamos aprender TS";
const preco = 500;
const condicao = preco >= 500; // tudo que resultar em true ou false
// ========================= TYPE OF =========================
// typeof é um operador JavaScript que retorna uma string, indicando o tipo de dado. Os possíveis valores retornados por typeof são: string, number, boolean, function, object, undefined, bigint e symbol. O typeof funciona como um type guard.
// O typeof funciona bem com os tipos primitivos, com outros tipos de dados, há formas mais assertivas de verifição
if (typeof frase === "string") {
    console.log("frase é string");
}
if (typeof preco === "number") {
    console.log("preco é number");
}
if (typeof condicao === "boolean") {
    console.log("condicao é boolean");
}
// ========================= FUNÇÕES CONSTRUTORAS X TIPOS DE DADOS =========================
// Não confundir string, number e boolean com String, Number e Boolean. Os últimos são as funções construtoras desses tipos de dados, responsáveis pela herança das propriedades e métodos dos mesmos.
const frase1 = new String("Front End");
const frase2 = String("Front End"); // utilizando a função construtora como função comum, e não gerando um objeto a partir dela, por isso a ausência do operador "new"
const frase3 = "Front End";
console.log(typeof String); // function
console.log(typeof frase1); // object
console.log(typeof frase2); // string
console.log(typeof frase3); // string
