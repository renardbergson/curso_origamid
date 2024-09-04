// FUNÇÕES CONSTRUTORAS
// Objetos
// Como já foi visto, para criar objetos é simples, basta definir uma variável e iniciá-la com chaves {}. Mas, e se precisarmos criar mais objetos com as mesmas características do anterior? Observe que o código a seguir não funcionará como esperado
console.log("PARTE 1");

const carro = {
  marca: "marca",
  preco: 0
}

const honda = carro;
honda.marca = "Honda";
honda.preco = 4000;

const fiat = carro;
fiat.marca = "Fiat";
fiat.preco = 3000;

console.log(carro);
console.log(honda);
console.log(fiat);
// carro, honda e fiat apontam para o mesmo objeto!
// o que queremos é uma forma de copiar os padrões do objeto de origem e só definir, por exemplo, os valores
// Para isso, existem as funções construtoras, que são responsáveis por construir novos objetos, sempre que chamamos as mesmas
// A seguir, observe o uso do operador "new", sem ele, ao chamar a função, ela executaria normalmente mas, com new, "honda2" e "fiat2" são objetos do tipo "Carro"!
// Por convenção, funções construtoras começam com letra maiúscula
function Carro() {
  this.marca = "marca";
  this.preco = 0;
  // o "this" faz referência à própria função
}

const honda2 = new Carro();
honda2.marca = "Honda";
honda2.preco = 4000;

const fiat2 = new Carro();
fiat2.marca = "Fiat";
fiat2.preco = 3000;

console.log(honda2);
console.log(fiat2);

// Palavra-chave "new"
// Ela é responsável por criar um novo objeto, baseado na função que passamos à frente dela
const chevrolet = new Carro();
//1 - cria um novo objeto
// chevrolet = {};

// 2 - Define o protótipo
// chevrolet.prototype = Carro.prototype; 
// (herda os métodos e propriedades do protótipo)

// 3 - Aponta a variável "this" para o objeto
// this = chevrolet;

// 4 - Executa a função, substituindo o "this" pelo objeto
// honda.marca = "...";
// honda.preco = ...;

// 5 - Retorna o novo objeto
// Em tese, continua sendo uma função, só que o valor retornado por ela é um objeto
// (Para conferir isso, retire a palavra "new" e retorne qualquer coisa dentro da função)
/*  
  return chevrolet = {
    marca: "...",
    preco: ...,
  }
*/

// Parâmetros e Argumentos
// É possível passar argumentos, que serão passados no momento da criação do objeto, o que também torna esses valores mais dinâmicos
function Carro2(marca, preco) {
  this.marca = marca; // marca do objeto = marca atribuida
  this.preco = preco; // preco do objeto = preco atribuido
}

const honda3 = new Carro2("Honda", 4000);
const fiat3 = new Carro2("Fiat", 3000);

console.log(honda3);
console.log(fiat3);

// Visibilidade
// Variáveis criadas dentro do Constructor, não precedidas da palavra "this" estão "protegidas", não sendo visíveis, mesmo se dermos um console.log do objeto em questão
function Carro3(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this); // mostra no console apenas "marca" e "preco"! 
}

const mazda = new Carro3("Mazda", 5000);
console.log(mazda); // Ex: mazda.taxa = undefined

// EXEMPLOS REAIS
// No mundo real, dificilmente criaremos Classes/Objetos nos moldes do que vemos nos primeiros exemplos sobre esse assunto: "pessoas", "carros", "animais" etc. Em um cenário real, um ojeto que podemos criar e que faz sentido é um objeto que manipula o Dom, por exemplo.
console.log("PARTE 2");

// Objeto Simples
const DomObjeto = {
  seletor: "li",
  // Se mudarmos a propriedade "seletor", o objeto Dom atribuirá seus métodos ao novo seletor 
  element() {
    return document.querySelector(this.seletor); 
    // DomObjeto.element(), no console, já retorna o elemento selecionado
  },
  ativar() {
    this.element().classList.add("ativo");
  }
}

// Função Construtora com parâmetros dinâmicos
function DomFuncaoConstrutora(seletor, classe) {
  this.element = () => {
    return document.querySelector(seletor);
  }
  this.ativar = () => {
    this.element().classList.add(classe);
  }
}

const ul = new DomFuncaoConstrutora("ul", "ativo");
const li = new DomFuncaoConstrutora("li", "ativo");
const ultimaLi = new DomFuncaoConstrutora("li:last-child", "ativo");

ul.ativar();
li.ativar();
ultimaLi.ativar();

// ================ EXERCÍCIOS ================
console.log("EXERCÍCIOS")

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
} 

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = () => {
    console.log(`${this.nome} andou!`);
  }
}

// Crie 3 pessoas: João - 20 anos, Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);
joao.andar();
maria.andar();
bruno.andar();

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
// 1 elements - retorna NodeList com os elementos selecionados (propriedade, não deve precisar ser executada!)
// 2 addClass(classe) - adiciona a classe a todos os elementos
// 3 removeClass(classe) - remove a classe a todos os elementos
function DomExercicio(seletor) {
  listaElementos = document.querySelectorAll(seletor);
  this.elements = listaElementos;

  this.addClass = (classe) => {
    this.elements.forEach((item) => {
      item.classList.add(classe);
    })
  }
  this.removeClass = (classe) => {
    this.elements.forEach((item) => {
      item.classList.remove(classe);
    })
  }
}

const paragrafos = new DomExercicio("p");