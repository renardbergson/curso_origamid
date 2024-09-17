// ================= Function =================
// Toda função é criada com o construtor Function, por isso herda seus suas propriedades e métodos
// As abordagens a seguir são exatamente a mesma coisa, porém, nunca criaremos uma função utilizando a segunda:

function numeroAoQuadrado(numero) {
  return numero * numero;
}

const numeroAoQuadrado2 = new Function("numero", "return numero * numero"); 
// a primeira string são os argumentos, a segunda o miolo da função

console.log("Dois ao quadrado é igual a:", numeroAoQuadrado(2)); // 4
console.log("Três ao quadrado é igual a:", numeroAoQuadrado2(3)); // 9

// PROPRIEDADES
// 1 - Function.length
// Retorna um número com o total de argumentos da função
console.log("======== PROPRIEDADES ========");
function somar(n1, n2) {
  return n1 + n2 + "";
}
console.log("Total de argumentos da função 'somar': ", somar.length); // 2
// ** estamos falando com a função e não com o que ela retorna, por isso não a executamos **

// 2 - Function.name
// Retorna uma string com o nome da função
console.log("Nome da função anterior:", somar.name);
// ** estamos falando com a função e não com o que ela retorna, por isso não a executamos **

// MÉTODOS
// 1 - Function.call(this, arg1, arg2, ...)
// I - Basicamente, executa a função...
console.log("========== MÉTODOS ==========");
function darOi() {
  return "Olá, estudante!";
}

console.log(darOi.call()); // Olá, estudante!

// Porém, com call() é possível passar uma nova referência para o 'this' da função/método
// O primeiro parâmetro é o 'this' e os demais são argumentos
// ** o objeto substituto para o 'this' deve ser parecido com o original **
function exibirMensagem(mensagem) {
  console.log("Novo this:", this, "|| Mensagem:", mensagem)
}

exibirMensagem.call({}, "JavaScript é massa"); // Novo this: {} || Mensagem: JavaScript é massa

// II - Explicando o 'this'
// Por padrão, uma função é criada dentro do objeto window, por isso, naturalmente o 'this' fará referência a ele!
// Podemos encontrar qualquer função criada desta forma: console.log(window.nomeDaFuncao)
// O que faremos a seguir não é correto, mas serve para exemplificar isso e também para começar a entender o funcionamento do 'this'
function anoCurso() {
  return this.curso + " " + this.ano;
}

console.log(anoCurso.call()); // undefined undefined (o 'this' atual não tem as propriedades 'curso' e 'ano')

window.curso = "JavaScript"; 
window.ano = "2024";

console.log(anoCurso()); // JavaScript 2024

// III = Referenciando um novo 'this'
const carro = {
  marca: "Ford",
  ano: 2018
}

function descreverCarro() {
  return this.marca + " " + this.ano;
}

console.log(descreverCarro.call(carro)); // Ford 2018

// IV - Uso geral do call()
// Esse método pode ser usado com qualquer função/método, inclusive os nativos, como forEach(), map(), etc. Em todas elas é possível mudar o 'this', utilizando o método call()
const carros = ['Ford', 'Fiat', 'VW'];
const frutas = ['Banana', 'Pêra', 'Uva'];

carros.forEach(item => {
  console.log(item); // Ford, Fiat, VW
})

carros.forEach.call(frutas, (item) => {
  console.log(item); // Banana, Pêra, Uva
  // mesmo citando a array "carros" (this) antes do método forEach(), a referência para ele (this) foi mudada/direcionada para a array "frutas"
})

// V - Substituição de objetos
// A abordagem a seguir não faz sentido, já que, primeiro instanciamos um objeto da classe "Dom" (section), e logo em seguida o substituimos por outro objeto (primeiroParagrafo). Porém, vamos considerar o exemplo apenas para aprendizado!
function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativar = function(classe) {
  this.element.classList.add(classe);
}

const section = new Dom("section"); 
section.ativar("ativo"); // a section agora possui a classe "ativo"

const primeiroParagrafo = {
  element: document.querySelector("p")
}
section.ativar.call(primeiroParagrafo, "ativo"); 
// agora o primeiro parágrafo também possui a classe "ativo"

console.log(section);
console.log(primeiroParagrafo);

// VI - Exemplo real de caso de uso
// Suponha que queremos filtrar os componentes de um elemento array-like com o método filter(), para retornar só aqueles que possuirem determinada classe
// Porém, sabe-se que o método filter() não existe no protótipo de elementos array-like, mas existe dentro do protótipo do construtor Array. Sendo assim, podemos evocar filter() diretamente do protótipo de Array e passar um 'this' para ele, sem que seja necessário primeiro transformar o elemento que vamos trabalhar em uma array
// ** HTMLCollection, NodeList, etc, são objetos parecidos com arrays e, justamente por isso, é possível utilizá-los como referência para o 'this' em métodos de array, através do call() **
/*  
  Relembrando: o que são objetos que se parecem com array (array-like)? São objetos construidos da seguinte forma:

  const arrayLike = {
    0: "item 1",
    1: "item 2",
    2: "item 3",
    length: 3
  }
*/
const LIs = document.querySelectorAll("li"); // array-like
const filtroClasse = Array.prototype.filter.call(LIs, (item) => {
  // perceba: vinculamos um 'this' para o método do protótipo de Array chamado filter(), sem isso obteríamos um erro, já que o 'this' (array a percorrer) normalmente é informado antes do método, o que não é o caso aqui!
  return item.classList.contains("ativo");
})

console.log("LI's que possuem a classe 'ativo':", filtroClasse);

/*  
  É a mesma coisa que:

  const filtroClasse = Array.from(LIs).filter(item => {
    return item.classList.contains("ativo");
  })
*/

// 2 - Function.apply(this, [arg1, arg2, ...])
// Funciona da mesma forma que o call(), a única diferença é que os argumentos são recebidos através de uma array, de modo que cada item da array será aplicado separadamente
// Para exemplo, utilizaremos o método Math.max(), que precisa receber cada argumento separado por vírgula
// Suponha que tenhamos um array de números. Ao invés de copiar para o método max(), podemos trabalhar com o método apply(), que fará esse trabalho para nós!
// ** perceba que, nas abordagens a seguir, a intenção não é mudar o this, mas focar nos argumentos, por isso, podemos passar o 'this' como um argumento nulo **
const numeros = [3, 4, 6, 1, 34, 44, 32];

const maiorNumero = Math.max(3, 4, 6, 1, 34, 44, 32); // normal
const maiorNumeroComCall = Math.max.call(null, numeros);  
const maiorNumeroComApply = Math.max.apply(null, numeros);

console.log(maiorNumero); // 44
console.log(maiorNumeroComCall); // NaN
console.log(maiorNumeroComApply); // 44

// Apply X Call
// Lembre-se: a única diferença é que apply() recebe os argumentos dentro de uma array!
// Para massificar, vamos mais uma vez filtrar as LI's que possuem a classe "ativo", dentre as demais

// percorrendo a variável "LIs", declarada anteriormente
function itemPossuiClasse(item) {
  return item.classList.contains("ativo");
}

const filtro1 = Array.prototype.filter.call(LIs, itemPossuiClasse);
const filtro2 = Array.prototype.filter.apply(LIs, [itemPossuiClasse]);

console.log(filtro1); // [li.ativo, li.ativo]
console.log(filtro2); // [li.ativo, li.ativo]

// 3 - Function.bind(this, arg1, arg2, ...)
// Vincula uma nova referência para o 'this', assim como os métodos anteriores podem fazer, mas possui diferenças
// Com bind(), um objeto pode "pegar emprestado" um método de outro objeto
/*  
  IMPORTANTE:

  I - ** Retorna a função com o novo contexto de 'this' mas NÃO a executa, é preciso ativá-la depois **
  II - ** Não é o ideal utilizar o método bind() com arrow functions **
*/

// exemplo A
const pessoa = {
  primeiroNome: "John",
  segundoNome: "Cooper",
  mensagem: function(ano) {
    return this.primeiroNome + " " + this.segundoNome + " " + "está estudando JavaScript em" + " " + ano;
  }
}

const renard = {
  primeiroNome: "Renard",
  segundoNome: "Bergson"
}

const mensagemRenard = pessoa.mensagem.bind(renard);  
// o método "mensagem" ficou vinculado à variável 'mensagemRenard' e aguarda para ser ativado!
console.log(mensagemRenard(2024)); // Renard Bergson está estudando JavaScript em 2024

// exemplo B
// No exemplo anterior, o parâmetro ano pode mudar de valor mas, se quisermos que determinado parâmetro permaneça com um valor fixo, podemos passá-lo junto ao informe do novo 'this'
function apresentacao(nome, profissao) {
  return `Meu nome é ${nome}, sou ${profissao}`;
}
const apresentacaoRenard = apresentacao.bind(null, "Renard"); // "nome" será sempre "Renard"
console.log(apresentacaoRenard("estudante")); // Meu nome é Renard, sou estudante

// exemplo C
// Utilizando bind() em métodos nativos
function filtrarLiComClasse(item) {
  return item.classList.contains("ativo");
}
const filtrarLi = Array.prototype.filter.bind(LIs, filtrarLiComClasse);

console.log("LI's que possuem a classe 'ativo':", filtrarLi()); // [li.ativo, li.ativo]

// exemplo D
// ** Perceba: ao utilizar o método bind() em qualquer função/método, até mesmo nos nativos, o retorno será sempre uma função com um novo contexto para o 'this' **
// Com base nesse raciocício, veja que o código a seguir, utilizando o método nativo querySelectorAll(), retorna uma função reutilizável, para selecionar qualquer elemento, sendo esse elemento um parâmetro variável!

const selecionarNode = document.querySelectorAll.bind(document); 
// o contexto de 'this' permaneceu 'document'

console.log(selecionarNode); // querySelectorAll() { [native code] }
console.log(selecionarNode("p")); // NodeList(3) [p.ativo, p, p]
console.log(selecionarNode("li")); // NodeList(4) [li.ativo, li, li, li.ativo]