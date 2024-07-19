// FOR EACH LOOP
// Constantemente selecionamos elementos do DOM, a melhor forma de interagirmos com eles é utilizando o loop For Each
// O primeiro parâmetro é um callback, ou seja, a função que será ativada a cada item. Essa função recebe 3 parâmetros: valor atual, index e array
const imgs = document.querySelectorAll("img");
imgs.forEach(function (img, index, array) {
  console.log(img, index);

  if (--imgs.length === index) {
    console.log(array);
  }
});

// Alguns objetos array-like possuem esse método, caso não possua, o ideal é transformá-los em uma array
const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);
titulosArray.forEach(function (item) {
  console.log(item);
});

// ARROW FUNCTION
// Sintaxe curta em relação à "function expression". Basta remover a palavra chave "function" e adicionar a fat arrow "=>" após os argumentos
const H2s = document.querySelectorAll("h2");
console.log("Percorrendo H2s com arrow function e parênteses");
H2s.forEach((item, index) => {
  console.log(item);
});

// Argumento único não precisa de parênteses
console.log("Percorrendo H2s com arrow function e sem parênteses");
// prettier-ignore
H2s.forEach(item => {
  console.log(item);
});

// Sem argumentos, precisa de parênteses, mesmo vazio
console.log("Percorrendo H2s com arrow function com parênteses vazios");
let i = 1;
H2s.forEach(() => {
  console.log(i++);
});

// Arrow functions com apenas uma linha podem ter retorno implícito, para isso, removemos as chaves também
console.log("Percorrendo H2s com arrow function e retorno implícito");
// prettier-ignore
H2s.forEach(item => console.log(item));

// EXERCÍCIOS
console.log("====== EXERCÍCIOS ======");
// Mostre no console cada parágrado do site
const paragraphs = document.querySelectorAll("p");
// prettier-ignore
paragraphs.forEach(p => console.log(p));

// Mostre o texto dos parágrafos no console
// prettier-ignore
paragraphs.forEach(p => console.log(p.innerHTML));

// Como corrigir os erros abaixo:
/* const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
  console.log(item, index);
}); */
const imagens = document.querySelectorAll("img");

imagens.forEach((item, index) => {
  console.log(item, index);
});

/* let I = 0;
imgs.forEach( => {
  console.log(I++);
});

imgs.forEach(() => i++); */
let I = 0;
imagens.forEach(() => {
  console.log(I++);
});

imagens.forEach(() => I++);
console.log(I); // 14 (incrementou "I")
