// CONSTRUTORES NATIVOS
// Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Ex: "NodeList" e "Element" são construtores. (Um construtor é sempre uma função)
// Toda função sempre possui um protótipo com ela, com propriedades e métodos que poderão ser acessados pelo tipo de dado criado pelo construtor, como vimos na aula 1

const pais = "Brasil"; 
// retorna a string "Brasil" direto
// se inserirmos "pais" no console, seguido de ponto, por um momento, ele será envolvido no pelo objeto String, que é o seu protótipo, tendo acesso aos seus métodos
console.log(String.prototype);
console.log(`Primeiro caracter: ${pais.charAt(0)}`); // herdando do protótipo

const cidade = new String("Santa Luzia"); 
// retorna o objeto "String", e esse objeto possui um construtor
// como vimos na linha 8, um dos métodos do protótipo desse construtor é o "toString()", cujo papel é justamente retornar uma string, propriamente dita, como uma palavra ou frase
console.log(cidade.toString());
console.log(`Tudo maiúsculo: ${cidade.toUpperCase()}`); // acessando o próprio protótipo

// É POSSÍVEL ACESSAR A FUNÇÃO DO PROTÓTIPO
// É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array
const lista = document.querySelectorAll("li"); 
// Observe que uma NodeList não tem acesso a alguns métodos de Array
// Por isso, é bastante comum transformar uma lista em Array

const listaArray = Array.prototype.slice.call(lista); 
// transforma o item em Array (semelhante ao método Array.from())
// listaArray agora é uma Array, herdando também todos os métodos do protótipo de Array
console.log(Array.prototype);
console.log(listaArray);

// MÉTODOS DIRETO DO OBJETO x MÉTODOS DO PROTÓTIPO
// Ambos os códigos abaixo fazem a mesma coisa
const listaArray2 = Array.prototype.slice.call(lista); // "slice"está linkado ao protótipo
const listaArray3 = Array.from(lista); // "from" está linkado direto à função Array
// Em tese, um array já criado, por exemplo [1, 2, 3], já passou pelo construtor Array, então não terá acesso ao método "from()" de "Array.from()"
// Por exemplo, um objeto que já criado não terá acesso à propriedade "create" de "Object.create()"

// Retornam uma lista com os métodos e propriedades
console.log(Object.getOwnPropertyNames(Array)); // 7 em Array (observe que não possui o método "from()"!)
console.log(Object.getOwnPropertyNames(Array.prototype)); // 40 em protótipo de Array

// Mais um exemplo
function Pessoa(nome) {
  this.nome = nome;
  this.andar = function() {
    return `${this.nome} está andando`;
  }
}

Pessoa.prototype.falar = function() {
  return `${this.nome} está falando`;
}

const renard = new Pessoa("Renard");

console.log(Object.getOwnPropertyNames(renard)); // (só as propriedades inerentes, não inclui as propriedades do protótipo)
console.log(Object.getOwnPropertyNames(renard.__proto__)); // propriedades do protótipo (lembrando que não é o ideal acessar assim)
console.log(Object.getOwnPropertyNames(Pessoa.prototype)); // propriedades do protótipo

// DADO.CONSTRUCTOR.NAME
// Retorna o nome do construtor
console.log(renard.constructor.name);

// SÓ OS MÉTODOS DO PROTÓTIPO SÃO HERDADOS
// Quando falamos de Objetos nativos, apenas os métodos dos protótipos são herdados
[1,2,3].slice(); // existe
// [1,2,3].from(); // não existe

// ENTENDENDO O QUE ESTÁ SENDO RETORNADO
// Os métodos e propriedades acessados com "." (ponto) são referentes ao tipo de dado retornado antes dele
const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  }
}

Carro; // Object (o próximo ponto retorna propriedades e métodos de Object.prototype)
Carro.marca; // String (o próximo ponto retorna propriedades e métodos de String.prototype)
Carro.preco; // Number (o próximo ponto retorna propriedades e métodos de Number.prototype)
Carro.andar; // com (), a função é executada, logo, retorna um valor que, neste caso é um booleano, então, o próximo ponto retorna propriedades e métodos de Boolean.prototype
// sem (), retornamos a função, não a estamos executando, então, o próximo ponto retorna propriedades e métodos de Function
console.log(Carro.andar.constructor.name); // "Function"
console.log(Carro.andar().constructor.name); // "Boolean"
console.log(Carro.andar().constructor.name.constructor.name); // "String"

// Em TESE, a base é sempre o que está sendo retornado!