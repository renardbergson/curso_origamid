/*  
  FUNÇÕES

  Bloco de código que pode ser executado e reutilizado. Pode receber valores e também retornar valores
*/

function areaQuadrado(lado) {
  return lado * lado;
}

console.log("a área do quadrado equivale a: " + areaQuadrado(5)); // 25

// EXECUTANDO E UTILIZANDO FUNÇÕES (parênteses executam a função)
function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7 (é o mesmo que 5 * 3.14)
console.log(total.toFixed(1));
// A função toFixed retorna uma String com a qtd de casas decimais definida entre parênteses

// PARÂMETRO X ARGUMENTO
// Ao criar uma função, definimos Parâmetros
// Ao executar, passamos Argumentos
function imc(peso, altura) {
  // "peso" e "altura" são parâmetros
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(85, 1.75).toFixed(2)); // "85" e "1.75" são argumentos

function corFavorita(cor) {
  // "cor" é um parâmetro
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta do mato";
  } else {
    return "Você não gosta de nada";
  }
}

console.log(corFavorita()); // não passamos argumentos

// ARGUMENTOS TAMBÉM PODEM SER FUNÇÕES!
// Elas são chamadas de "callback" e, geralmente ocorrem após algum evento
document.addEventListener("click", function mostrarQueClicou() {
  // o segundo param é a função que será executada, caso o click ocorra
  // se a função for passada direto, dar nome a ela é opcional (função anônima)
  console.log("clicou em algum lugar do documento!");
  document.removeEventListener("click", mostrarQueClicou);
  // neste caso, como queremos remover o listener, precisamos nomear
});

// PODEM OU NÃO RETORNAR ALGUMA COISA
// Quando não definimos um valor, a função retorna "undefined", o código interno é executado normalmente, independente disso
function imcSemReturn(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imcSemReturn(90, 1.85); // mostra o imc no console
console.log(imcSemReturn(90, 1.85)); // mostra o imc e "undefined" (retorno não definido)

// VALORES RETORNADOS
// Uma função pode retornar qualquer tipo de dado e até outras funções, porém...
// * retornar diferentes tipos de dados não é uma boa prática! *
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Digite um número para mostrar";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade("trinta e um"));

// ESCOPO
// Variáveis e funções definidas dentro de um bloco {} não são visíveis fora dele
function paisesFaltaVisitar(paisesVisitados) {
  var totalPaisesNoMundo = 193;
  return `Falta visitar ${
    totalPaisesNoMundo - paisesVisitados
  } países no mundo!`;
}

// console.log(totalPaisesNoMundo); // totalPaisesNoMundo is not defined

// ESCOPO LÉXICO
// Conseguimos acessar variáveis criadas no contexto "pai", mas nunca de fora para dentro
var profissao = "Militar";

function dados() {
  var nome = "Renard";
  var idade = 20;

  function outrosDados() {
    var endereco = "Campina Grande";
    var idade = 31;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }

  return outrosDados();
}

console.log(dados()); // 'Renard, 31, Campina Grande, Militar'
// outrosDados(); // outrosDados is not defined

// HOISTING
// Antes de executar funções tradicionais, o JS "move" todas elas para a memória, as ergue para o topo do código, ou seja, mesmo que determinada função seja chamada antes da parte em que foi declarada, o código irá funcionar

mostrarNome("Renard"); // Renard

function mostrarNome(nome) {
  console.log(nome);
}

// +++++++++++++++++ EXERCÍCIOS +++++++++++++++++
// Crie uma função para verificar se um valor é Truthy
console.log("... EXERCÍCIOS ...");

function isTruthy(dado) {
  if (!!dado) {
    return `O dado informado retorna 'true'`;
  } else {
    return `O dado informado retorna 'false'`;
  }
}

console.log(isTruthy(null));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return `O perímetro do quadrado é igual a ${lado * 4}`;
}

console.log(perimetroQuadrado(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function mostrarNomeCompleto(nome, sobrenome) {
  return `Nome completo: ${nome} ${sobrenome}`;
}

console.log(mostrarNomeCompleto("Renard", "Bergson"));

// Crie uma função que verifica se um número é par
function isEven(numero) {
  if (numero % 2 === 0) {
    return "O número informado é par";
  } else {
    return "O número informado não é par";
  }
}

console.log(isEven(2));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificarTipoDeDado(dado) {
  return `O dado informado é do tipo '${typeof dado}'`;
}

console.log(verificarTipoDeDado("Teste"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
document.addEventListener("scroll", function mostrarNomeCompleto2() {
  console.log("Renard Bergson Medeiros da Silva");
  document.removeEventListener("scroll", mostrarNomeCompleto2);
});

// Corrija o erro abaixo
/*  
  function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }

  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  
  precisoVisitar(20);
  jaVisitei(20);
*/
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));

// outra maneira de resolver seria colocar "jaVisitei" dentro de "precisoVisitar" e fazer as devidas modificações
