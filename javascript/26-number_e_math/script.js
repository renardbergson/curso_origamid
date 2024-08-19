// NUMBER E MATH

// NUMBER
// É a função construtora de números. Todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos próprios. (não são do protótipo)
// Ambas as formas a seguir criam números
const ano = 2024; 
const preco = new Number(99);

// Number.isNaN() e Number.isInteger()
// "isNaN()" é um método de Number, ou seja, não faz parte do protótipo, assim como "isInteger()"
// o primeiro verifica se o argumento passado retorna "not a number" (não é um número), o segundo verifica se o argumento é um número inteiro
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(4 + 5)); // false
console.log(Number.isNaN("teste")); // false

console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(10.6)); // false

// Number.parseFloat() e Number.parseInt()
// Servem para retornar um número, não-inteiro e inteiro, respectivamente.
// A conversão pode inclusive ser a partir de uma string, desde que a string comece com número!
// "parseInt()" também pode receber um segundo parâmetro que é o Radix, o qual recebendo o valor 10, indica que queremos retornar um número decimal
// Esses métodos podem ser invocados usando Number ou de forma solta
console.log(parseFloat("99.50")); // 99.5 
console.log(Number.parseFloat("99.50")); // 99.5 
console.log(Number.parseFloat("100 reais")); // 100 
console.log(Number.parseFloat("R$ 100")); // NaN (caracteres na frente)

console.log(parseInt("    203")); // 203 (ignora espaços)
console.log(parseInt("99.50", 10)); // 99
console.log(Number.parseInt(5.434244555)); // 5
console.log(Number.parseInt("100 reais", 10)); // 100

// n.toFixed(decimais)
// É um método do protótipo de Number que arredonda (pra cima e para baixo) um número, com base no total de casas decimais passadas como argumento
// A partir de 5, o número é arredondado para cima, abaixo de 5 é arredondado para baixo
// O valor retornado é uma string!
const imposto = 2.99;
console.log(imposto.toFixed()); // 3

const taxa = 15.455;
console.log(taxa.toFixed(2)); // 15.46

const precoSugerido = 1499.49;
console.log(precoSugerido.toFixed()); // 1499

console.log((83.40).toFixed()); // 83

// n.toString(radix)
// É um método do protótipo de Number que transforma um número em uma string, com base no Radix (opcional)  
const precoPorHora = 2.99;
console.log(precoPorHora.toString(10)); // "2.99"

// n.toLocaleString(lang, options)
// "options" é um objeto
const valorBruto = 59.49;
console.log(preco.toLocaleString("en-US", {style: "currency", currency: "USD"})); // $99.00
console.log(preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})); // R$ 99,00

// MATH
// É um objeto nativo que possui propriedades e métodos de expressões matemáticas comuns, como o PI, por exemplo
console.log(`Valor de aproximado de PI: ${Math.PI.toFixed(2).replace(".", ",")}`); // 3,14

// Math.abs(), Math.ceil(), Math.floor() e Math.round()
// "Math.abs()" transforma número negativo em positivo
console.log(Math.abs(-5)); // 5

// "Math.ceil()" arredonda um número para cima
console.log(Math.ceil(5.8334)); // 6

// "Math.floor()" arredonda um número para baixo
console.log(Math.floor(5.8334)) // 5

// "Math.round()" arredonda um número para o inteiro mais próximo, de forma semelhante ao método "toFixed()", só que aqui o valor retornado é um número!
// A partir de 5, o número é arredondado para cima, abaixo de 5 é arredondado para baixo
console.log(Math.round(2.75)); // 3
console.log(Math.round(4.3)); // 4

// Math.max(), Math.min() e Math.random()
// "Math.max()" retorna o maior número de uma lista de argumentos
console.log(Math.max(5, 3, 11, 42, 2)); // 42

// "Math.min()" retorna o menor número de uma lista de argumentos
console.log(Math.min(5, 3, 11, 42, 2)); // 2

// "Math.random()", originalmente, retorna números aleatórios entre 0 e 1. 
const aleatorio = Math.random();
console.log(aleatorio); // número qualquer entre zero e um, que sempre será diferente ao carregar o documento

// número aleatório de 0 a 100
const aleatorioZeroCem = Math.random() * 100; // número qualquer entre zero e cem, que sempre será diferente ao carregar o documento
console.log(Math.floor(aleatorioZeroCem)); // Math.floor() para eliminar as muitas casas decimais

// número aleatório entre 20 e 40 (fórmula)
// Math.floor( Math.random() * (max - min + 1) ) + min (...ou ceil)
const aleatorio20e40 =  Math.ceil( Math.random() * (40 - 20 + 1) ) + 20; // Math.ceil() para eliminar as muitas casas decimais
console.log(aleatorio20e40);

// ===================== EXERCÍCIOS =====================
console.log("=================== EXERCÍCIOS ===================")
// Retorne um número aleatório
// entre 1050 e 2000
function numeroAleatorio(min, max) {
  return Math.ceil( Math.random() * (max - min + 1) + min );
}
const intervalo = numeroAleatorio(1050, 2000);
console.log(intervalo);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const numerosArray = numeros.split(", ");
console.log(Math.max(...numerosArray));
/*  
  O operador de distribuição (...), também conhecido como "spread operator", passará dinamicamente cada valor da array, como se fosse um argumentos para o método Math.max(), por exemplo:

  Math.max(numerosArray[0], numerosArray[1], numerosArray[2]...)
*/

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];
function formatarPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace("," , ".");
  preco = +preco.toFixed(2);
  return preco;
}

let somaPrecos = 0;
listaPrecos.forEach(preco => {
  somaPrecos += formatarPreco(preco);
})

console.log(`A soma dos preços é igual a: ${somaPrecos.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`);