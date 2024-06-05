/*
  VERDADEIRO OU FALSO (truthy or falsy)
  
  Existem valores que retornam "true" e outros que retornam "false", quando verificados em uma expressão booleana. Veja os exemplos a seguir.
*/

// Valores que retornam falsy
if (false) {} // prettier-ignore
if (0 || -0) {/* zero positivo ou negativo */} // prettier-ignore
if (NaN) {} // prettier-ignore
if (null) {} // prettier-ignore
if (undefined) {} // prettier-ignore
if ('' || ""|| ``) {/* string vazia e sem espaços */} // prettier-ignore

// Valores que retornam truthy (todo o resto em JS)
if (true) {} // prettier-ignore
if (1) {} // prettier-ignore
if (' ' || " " || ` `) {/* string vazia com espaço */} // prettier-ignore
if (-1 || 1) {/* qualquer número diferente de zero, positivo ou negativo */} // prettier-ignore
if ({}) {/* objeto vazio */} // prettier-ignore

// Operador lógico de Negação
// Um sinal de exclamação - (nega uma op booleana, ou seja: !true = false, !false = true)
// Tenha em mente que, o que está entre parênteses sempre busca por TRUE
const temGraduacao = false;
if (!temGraduacao) {
  console.log("é verdade que 'temGraduacao retorna falso'");
}

if (!null) {
  console.log("é verdade que 'null' retorna falso");
}

// Dois sinais de exclamação - (verifica se algo é verdadeiro ou falso)
if (!!1) {
  console.log(
    "é verdade que qualquer número, positivo ou negativo, diferente de zero, retorna true"
  );
}

// Operadores de Comparação (sempre retornam um valor booleano)
// Maior, menor, maior ou igual, menor ou igual
const expressao1 = 10 > 5;
if (expressao1) {
  console.log("é verdade que '10 > 5' retorna true, porque 10 é maior que 5");
}

var expressao2 = 20 < 10;
if (!expressao2) {
  console.log(
    "é verdade que '20 < 10' retorna falso, porque 20 não é menor que 10"
  );
}

let expressao3 = 10 >= 10;
if (expressao3) {
  console.log(
    "é verdade que '10 >= 10' retorna true, porque 10 é igual a 10, embora não seja maior que 10"
  );
}

let expressao4 = 10 <= 10;
if (expressao4) {
  console.log(
    "é verdade que '10 <= 10' retorna true, porque 10 é igual a 10, embora não seja menor que 10"
  );
}

// Comparação de igualdade
// '==' faz comparação considerando só o valor
// * Se envolve strings, sempre case sensitive! *
var expressao5 = 10 == "10";
if (!!expressao5) {
  console.log(
    "é verdade que 10 == '10' retorna true, embora sejam de tipos diferentes, os valores são iguais"
  );
}

// '===' faz uma comparação estrita, considerando valor e tipo
// * Se envolve strings, sempre case sensitive! *
const expressao6 = 10 === "10";
if (!expressao6) {
  console.log(
    "é verdade que 10 === '10' retorna false, embora os valores sejam iguais, os tipos são diferentes"
  );
}

var Gato = "Gato";
if (!(Gato === "gato")) {
  // retorna falso, mas estamos invertendo para true
  // observe que estamos negando a expressão inteira, caso contrário, negamos só "Gato"
  console.log(
    "é verdade que 'Gato' é diferente de 'gato', ambos são strings, mas escritos de forma diferente"
  );
}

// Operadores de Diferença
// '!=' verifica a diferença considerando o valor
// * Se envolve strings, sempre case sensitive! *
const numero10 = 10;
if (!(10 != "10")) {
  // retorna falso, mas estamos invertendo para true
  // observe que estamos negando a expressão inteira, caso contrário, negamos só 10
  console.log(
    "é verdade que 10 != '10' retorna false, ambos são de tipos diferentes mas o valor é o mesmo"
  );
}

// '!==' verifica a diferença considerando valor e o tipo
// * Se envolve strings, sempre case sensitive! *
if (numero10 !== "10") {
  console.log(
    "é verdade que 10 !== '10' retorna true, ambos são de tipos diferentes, embora o valor seja o mesmo"
  );
}

if (Gato != "gato") {
  console.log(
    "é verdade que 'Gato' é diferente de 'gato', ambos são strings, mas escritos de forma diferente"
  );
}

// Operadore Lógico && (E)
// Compara duas expressões e todas precisam ser verdadeiras
// * Retorna o primeiro valor FALSO que encontrar, se todos foram verdadeiros, retorna o último deles *
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log("gato" && "cão"); // cão
console.log(5 - 5 && 5 + 5); // 0 (zero significa falso e também é o primeiro valor falso)
console.log("gato" && false); // false
console.log(5 >= 5 && 3 < 6); // true
console.log(5 - 10 && 5 + 5); // 10 (é o último valor verdadeiro)

// Operador Lógico || (OU)
// Compara expressões e, pelo menos uma precisa ser verdadeira
// * Retorna o primeiro valor VERDADEIRO que encontrar *
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log("gato" || "cão"); // gato
console.log(5 - 5 || 5 + 5); // 10 (primeiro valor true)
console.log("gato" || false); // gato
console.log(5 >= 5 && 3 < 6); // true

// Misturando && com ||
console.log(5 - 5 || (5 + 5 && 10 - 2)); // 8 (|| retorna o primeiro verdadeiro e a expressão && retorna o último positivo)

// Switch
// Usado para verificar diferentes valores de uma variável, através da palavra "case". Caso corresponda, é possível fazer alguma coisa e utilizar a palavra "break", para cancelar as demais verificações. O case "default" ocorrerá, caso nenhuma dos cases seja satisfeito
const corFavorita = "azul";
switch (corFavorita) {
  case "azul":
    console.log("Olhe para o céu");
    break;
  case "vermelho":
    console.log("Olhe para as rosas");
    break;
  case "amarelo":
    console.log("Olhe para o sol");
    break;
  default:
    console.log("Feche os olhos");
}

// EXERCÍCIOS
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
const minhaIdade = 31;
const idadeDoParente = 20;

if (minhaIdade < idadeDoParente) {
  console.log("A idade é menor");
} else if (minhaIdade > idadeDoParente) {
  console.log("A idade é maior");
} else {
  console.log("A idade é igual");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao); // 3 (último valor verdadeiro)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // true
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false
console.log(Boolean(empregoFuturo), /* OU */ !!nome);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil tem mais habitantes");
} else {
  console.log("Brasil tem menos habitantes");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso"); // falso, porque com && todas as comparações precisam ser verdade
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
  // "Cão"
  // Com ||, 5 > 2 retorna true e, com && ambas são verdadeiras mas, "Cão" é o último retorno true
} else {
  console.log("Falso");
}
