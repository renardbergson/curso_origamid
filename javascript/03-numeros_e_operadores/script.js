// NÚMEROS
var idade = 28;
const pi = 3.14; // ponto para decimal
let exponencial = 2e5; // 200000 (o número após o "e" simboliza a qtd de zeros à direita)
const exponencial2 = 2e-3; // 0.002 (o número negativo após o "e" simboliza a qtd de zeros à esquerda)

console.log(exponencial);
console.log(exponencial2);

// OPERADORES ARITMÉTICOS
var soma = 100 + 20; // 120
const subtracao = 30 - 15; // 15
let multiplicacao = 2 * 10; // 20
var divisao = 10 / 2; // 5
var expoente = 2 ** 4; // 16
const modulo = 14 % 5; // 4 (a parte inteira, o resto)

// OPERADORES ARITMÉTICOS COM STRINGS
var soma2 = "100" + 50; // 10050 (concatenação)
var subtracao2 = "100" - 50; // 50 (se for só número, ocorre conversão de string para number)
const multiplicacao2 = "100" * 2; // 200 (se for só número, ocorre conversão de string para number)
let divisao2 = "comprei 10" / 2; // NaN (not a number, porque não há só números)

console.log(isNaN(divisao2)); // verificar se uma variável é NaN

// A ORDEM IMPORTA (multiplicação e divisão depois soma e subtração)
var op1 = 20 + 5 * 2; // 30 (multiplicação primeiro)
var op2 = (20 + 5) * 2; // 50 (parênteses primeiro)
var op3 = (20 / 2) * 5; // 50 (segue a sequência, parênteses opcional)
var op4 = 10 + 10 * 2 + 20 / 2; // 40 (multiplicação e divisão primeiro)

// OPERADORES ARITMÉTICOS UNÁRIOS
let incrementar = 5;
console.log(incrementar++); // 5
console.log(incrementar); // 6 (incrementou depois)

let incrementar2 = 5;
console.log(++incrementar2); // 6 (incrementou antes)

var decrementar = 4;
console.log(decrementar--); // 4
console.log(decrementar); // 3 (decrementou depois)

var decrementar2 = 4;
console.log(--decrementar2); // 3 (decrementou antes)

// os sinais + e - tentam transformar o valor seguinte em um número
var frase = "Isso é uma frase";
console.log(+frase); // NaN
console.log(-frase); // NaN

let stringNumero = "28";
console.log(+stringNumero); // 28
console.log(+stringNumero + 10); // 38

const possuiFaculdade = true;
console.log(+possuiFaculdade); // 1 (o número um simboliza verdadeiro)

// EXERCÍCIOS
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // prettier-ignore
console.log(total); // 35

// Crie duas expressões que retornem NaN
var expressao1 = "teste" / 2;
var expressao2 = "teste" - 2;
console.log(expressao1);
console.log(expressao2);

// Somar a string '200' com o número 50 e retornar 250
let soma3 = +"200" + 50;
console.log(soma3); // 250

// Incremente o número 5 e retorne o seu valor incrementado
let numeroCinco = 5;
console.log(++numeroCinco); // 6

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

console.log(+numero / 2);
