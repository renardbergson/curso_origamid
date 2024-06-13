// TUDO É OBJETO
// Em JS praticamente tudo é objeto. Strings, Números, Boolean, Objetos, etc possuem propriedades e métodos, por isso são objetos. Lembrando que acessamos propriedades e métodos de um objeto através de ponto (.)
// * Na verdade, se dermos um "typeof" desses tipos de dados, cada um retornará o seu devido tipo mas, ao acessar propriedades ou métodos, por um breve momento eles são envolvidos em um Objeto (coerção), tendo acesso, assim, às propriedades e métodos desse Objeto *
var nome = "Renard";
console.log(nome.length); // 6
console.log(nome.charAt(3)); // "a"
console.log(nome.replace("rd", "to")); // Renato
console.log(nome); // Renard (não altera a variável original)

// como vimos acima, uma string herda propriedades e métodos do construtor String()
nomeMinusculo = nome.toLowerCase(); // mais um exemplo
console.log(nomeMinusculo);

// NÚMEROS
// os números também seguem a mesma regra
var altura = 1.75;
console.log(altura.toString()); // "1.75"
console.log(altura.toFixed()); // "2"

// FUNÇÕES
// elas também possuem métodos e propriedades
function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado.length); // 1 (quantidade de parâmetros/argumentos)

// ELEMENTOS DO DOM
// o DOM também é um objeto e, seus elementos herdam propriedades e métodos dele
var botao = document.querySelector("#btn"); // o objeto "document" possui um método chamado "querySelector", que serve para selecionar elementos do DOM, esse método recebe 1 argumento, que é um seletor CSS

console.log(botao.id); // "btn"
// praticamente todos os efeitos JS são aplicados utilizando propriedades e métodos de objetos do DOM

// EXERCÍCIOS
console.log("=========== EXERCÍCIOS ===========");

// nomeie 3 propriedades ou métodos de strings
var nomeCurso = "Análise e Desenvolvimento de Sistemas";
// => toLowerCase
// => toUpperCase
// => indexOf

// nomeie 5 propriedades ou métodos de elementos do DOM
// => innerHTML
// => innerText
// => addEventListener
// => classList
// => onclick

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function copiarTexto() {
  // selecionar alvo
  var input = document.querySelector("#myInput");

  // selecionar texto
  input.select();
  input.setSelectionRange(0, 99999);

  // copiar texto
  navigator.clipboard.writeText(input.value);

  // alertar com texto selecionado
  alert("Texto copiado: " + input.value);
}
