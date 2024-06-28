// ESCOPO

// ESCOPO DE FUNÇÃO
// Variáveis declaradas dentro de funções NÃO são acessadas fora delas
function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // "Fusca"
// console.log(carro); // Erro: carro is not defined

// VARIÁVEL GLOBAL (Erro)
// Criar variáveis sem as palavras-chave var, let ou const, cria uma variável global, ou seja, que pode ser acessada em qualquer escopo. Isso é um erro
// Usar o comando 'use strict' no documento js impede esse tipo de erro
function inserirGlobal() {
  global = "global";
}
inserirGlobal();

console.log(global); // "global"
// perceba que, para que a variável "global" possa existir, ainda assim, é preciso chamar a função onde ela está

// ESCOPO DE FUNÇÃO (Pai)
// Variáveis declaradas no escopo pai conseguem ser acessadas por elementos posteriores a ele, como funções, por exemplo
var profissao = "Militar";

function mostrarProfissao() {
  var frase = `Minha profissão é: ${profissao}`;
  console.log(frase);
  // "profissao" está fora de "mostrarProfissao", por isso, é visível
}

mostrarProfissao(); // Minha profissão é: Militar

// ESCOPO DE BLOCO
// Blocos são códigos criados entre chaves, porém, não são chaves que demarcam funções.
// Os Blocos não precisam necessariamente de condicionais
// Variáveis criadas com "var" vazam o bloco, por isso, a partir do ES6, a melhor forma de declarar uma variável é usando as palavras "const" ou "var", pois elas respeitam o escopo de bloco
{
  var nome = "Renard";
}
console.log(nome); // "Renard"

if (true) {
  let sobrenome = "Bergson";
  const ultimoNome = "Silva";
}

// console.log(sobrenome); // Erro: sobrenome is not defined
// console.log(ultimoNome); // Erro: sobrenome is not defined

// Mesmo com uma condição falsa, uma variável criada com "var" transcenderá um bloco de código. Neste caso, será declarada e erguida (hoisting), mas seu valor não conseguirá ser atribuido, por conta da condição inicialmente falsa. Ainda assim, existirá como "undefined"
if (false) {
  var nomeCompleto = "Renard Bergson Medeiros da Silva";
}

console.log(nomeCompleto); // "undefined"

// Var e For loop
// Variáveis criadas com "var" dentro de loops também passam a existir fora dele
for (var i = 1; i < 6; i++) {
  console.log(`Número ${i}`);
}

console.log(i); // 6 (valor atualizado)

// CONST
// Mantém o escopo no bloco, impede a redeclaração (o que é mais uma deficiência de uma variável criada com "var"), impede a criação sem que seja declarado um valor e também impede a sua modificação
const mes = "Junho";
// mes = "Julho"; // Erro: Assignment to constant variable
// const semana; // Erro: declarou sem valor

// Quando se trata de objetos, Const é flexível, para modificar propriedades e métodos
// Neste caso, o que não será possível é substituir o objeto outro dado
const data = {
  dia: 28,
  mes: "Junho",
};

data.dia = 29; // funciona!
data.ano = 2024; // funciona!
// data = "29/06/2024"; // Erro: Assignment to constant variable
console.log(data);

// LET
// Mantém o escopo no bloco, impede a redeclaração, permite a criação de variáveis sem declarar seus valores e também permite a modificação deles
let ano;
ano = 2023;
ano++;
console.log(ano); // 2024

// EXERCÍCIOS
// Retire as questões dos comentários
/*  
  1 - Por qual motivo o código abaixo retorna com erros?
  {
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
  }
  console.log(var, marca, portas);

  2 - Como corrigir o erro abaixo?
  function somarDois(x) {
    const dois = 2;
    return x + dois;
  }
  function dividirDois(x) {
    return x / dois;
  }
  somarDois(4);
  dividirDois(6);

  3 - O que fazer para total retornar 500?
  var numero = 50;

  for(var numero = 0; numero < 10; numero++) {
    console.log(numero);
  }

  const total = 10 * numero;
  console.log(total);
*/

console.log("============= EXERCÍCIOS =============");
// 1 - Por qual motivo o código abaixo retorna com erros?
// Os erros ocorrem porque:
// a - "var" é uma palavra reservada, não podendo ser invocada como nome de variável
// b - "portas foi declarada com "const", de modo que a variável não transcende o escopo do bloco de código
// c - Podemos dar um console.log logo dentro do escopo de bloco, podendo assim mostrar todas as variáveis ou deixar o console.log fora do bloco e mostrar apenas a variável "cor"
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
  console.log(cor, marca, portas);
}

// 2 - Como corrigir o erro abaixo?
// O erro ocorre porque:
// A variável "dois" só existe no escopo da primeira função
// Para corrigir, podemos tornar "dois" uma variável acessível às duas funções, movendo-a para o escopo-pai
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// 3 - O que fazer para total retornar 500?
// A solução é trocar a palavra "var" por "let", de modo que a variável "numero" no loop de repetição só exista dentro dele, o que a diferenciará da primeira variável de mesmo nome
// Se a intenção não for alterar o valor de "numero" posteriormente, podemos criá-la com "const"
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
