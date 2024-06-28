// OPERADORES DE ATRIBUIÇÃO
// Podem funcionar com formas abreviadas
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0) Traz o resto da divisão normal, anterior
x **= y; // x = x ** y (x elevado a y, que é 9765625)

// OPERADOR TERNÁRIO
// É a abreviação de condicionais com if e else
// Geralmente utilizado quando queremos atribuir valor a uma variável, dependendo de uma condição
var idade = 19;
var possuiDiabetes = false;
var podeBeber = idade >= 18 && !possuiDiabetes ? "Pode beber" : "Não pode beber"; // prettier-ignore
console.log(podeBeber);
// as expressões ternárias, naturalmente retornam valores booleanos, então, não faz muito sentido retornar esse tipo de valor, o que seria redundante

// IF ABREVIADO
// Não é necessário abrir e fechar chaves {}, quando retornamos apenas uma linha de código
var possuiFaculdade = true;
if (possuiFaculdade) console.log("Possui faculdade!");
else console.log("Não possui faculdade!");

if (possuiFaculdade)
  console.log("Possui faculdade!"); // prettier-ignore
else
  console.log("Não possui faculdade!"); // prettier-ignore

// EXERCÍCIOS
console.log("=============== EXERCÍCIOS ===============");
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log("A variável 'scroll' agora vale 1500");

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito = possuiCarro && possuiCasa;
// Ou: possuiCarro && possuiCasa ? true : false;
// Mas, note que NÃO precisa retornar "true" ou "false", pois já é o padrão retornado
console.log(darCredito);
