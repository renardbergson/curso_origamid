const nome = "Renard"; // String
const idade = 31; // Number
const possuiFaculdade = true; // Boolean
var time; // Undefined
const comida = null; // Null (Object)
const simbolo = Symbol(); // Symbol
let novoObjeto = {}; // Object

// Verificar tipo de dado (typeof)
console.log(
  typeof nome,
  typeof idade,
  typeof possuiFaculdade,
  typeof time,
  typeof comida,
  typeof simbolo,
  typeof novoObjeto
);

// Soma de Strings (concatenação)
const sobrenome = "Bergson";
console.log(nome + " " + sobrenome);

// Soma de Strings e Numeros (concatenação)
var gols = 1000;
var frase = "Romário fez" + " " + gols + " " + "gols";
var frase2 = `Romário fes ${gols + 1} gols`;

console.log(typeof frase);
console.log(typeof frase2);

// EXERCÍCIOS

// Declare uma variável contendo uma string
const nome2 = "Esdras";

// Declare uma variável contendo um número dentro de uma string
let edicao = "22";

// Declare uma variável com a sua idade
var idade2 = 20;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

const sobrenome2 = "Medeiros";
var nomeCompleto = `${nome2} ${sobrenome2}`;
console.log(nomeCompleto);

// Coloque a seguinte frase em uma variável: It's time
const fraseIngles = "It's time";

// Verifique o tipo da variável que contém o seu nome
var verificarTipoNome = typeof nome2;
console.log(verificarTipoNome);
