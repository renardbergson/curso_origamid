// OBJETOS
// É um conjunto de variáveis e funções. As variáveis são chamadas de Propriedades e as funções de Métodos
// Criamos objetos utilizando chaves {}
var curso = {
  nome: "Análise e Desenvolvimento de Sistemas",
  duracao: "2 anos e meio",
  tipo: "tecnólogo",
};
console.log(typeof curso);

// Propriedades e Métodos consistem em Nome (chave) e Valor
console.log(curso.nome); // Análise e Desenvolvimento de Sistemas

// MÉTODOS
// É uma propriedade que possui uma função no local de seu valor
// normalmente, não é necessário dar nome aos métodos, além do que foi definido antes dos 2 pontos
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return lado * this.lados; // "this" faz referência ao próprio objeto
  },

  // Abreviação
  // Observe que o segundo método (perimetro) não possui 2 pontos nem a palavra reservada "function". É possível escrever os métodos dessa forma também
};

// executamos os métodos (funções) através dos parênteses
console.log(quadrado.area(5)); // 25
console.log(quadrado.perimetro(5)); // 20

// PARA QUE SERVEM?
// Objetos servem para organizar o código em pequenas partes reutilizáveis
// Por exemplo, existe um objeto nativo do JS chamado "Math". Sempre que quisermos mostrar propriedades ou chamar métodos, não é necessário atribuí-los novamente
console.log(Math.PI); // valor de PI
console.log(Math.random()); // número aleatório entre 0 e 1

// Console também é um objeto nativo e "log()" é um método dele, assim, sempre que quisermos mostrar algo na tela, simplesmente chamamos esse mesmo método
console.log("Executando o método 'log()'");
console.table(quadrado); // outro método do objeto "console"

// Dot Notation Get
// Acessa propriedades de um objeto utilizando ponto (.)
console.log(`Um quadrado tem ${quadrado.lados} lados`);

// Dot Notation Set
// Altera (se já existir) ou cria novas propriedades ou métodos utilizando ponto antes da igualdade (.)
quadrado.nome = "quadrado";
console.log(quadrado); // o obj "quadrado" agr possui uma propriedade chamada "nome"

// PROTÓTIPO E HERANÇA
// * Seguindo o conceito de herança, um objeto sempre herda propriedades e métodos do objeto que foi utilizado para criá-lo *
var menu = {
  width: 800,
};

// "hasOwnProperty" verifica se uma propriedade foi criada dentro do objeto
// Todo objeto criado herda características do protótipo "Object", como o método "hasOwnProperty", por exemplo
console.log(menu.hasOwnProperty("width")); // true
console.log(menu.hasOwnProperty("height")); // false

// ++++++++++++++++++++ EXERCÍCIOS ++++++++++++++++++++
// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: "Renard",
  sobrenome: "Bergson",
  profissao: "Militar",
  idade: 31,
};

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function () {
  return `Nome Completo: ${this.nome} ${this.sobrenome}`;
};

console.log(dados.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto, com 10 anos, que late ao ver um homem
var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "latir";
    } else {
      return "...";
    }
  },
};

console.log(cachorro.latir("homem"));
