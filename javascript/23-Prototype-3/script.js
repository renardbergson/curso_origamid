// EXERCÍCIOS
console.log("============== EXERCÍCIOS ==============");
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
  return `Nome Completo: ${this.nome} ${this.sobrenome}`;
}

const renard = new Pessoa("Renard", "Bergson", 32);
console.log(renard.nomeCompleto());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));
// *** Document é a função que constrói o objeto document ***
console.log(Document.constructor.name); // Function

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
console.log(li.constructor.name); // HTMLLIElement. Se escrevermos "console.log(HTMLLIElement.prototype)", veremos que, consequentemente, uma LI herda todas essas propriedades do seu construtor

li.click;
console.log(li.click.constructor.name); // Function

li.innerText;
console.log(li.innerText.constructor.name); // String ("Item 1")

li.value;
console.log(li.value.constructor.name); // Number (0)

li.hidden;
console.log(li.hidden.constructor.name); // Boolean (false)

li.offsetLeft;
console.log(li.offsetLeft.constructor.name); // Number (48)

li.click();
console.log(li.click()); // undefined (se tentarmos escrever, "li.click().constructor", obteremos um erro)

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; 
console.log(li.hidden.constructor.name); // String !! 
// CUIDADO! Uma string que diz o tipo de dado continua sendo uma string