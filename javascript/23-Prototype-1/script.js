// PROTOTYPE
// Sempre acessamos métodos de outros objetos, métodos nunca criados por nós, isso só é possível graças aos protótipos
// Um protótipo sempre está ligado a uma função, ele é uma propriedade das funções, mesmo que não seja uma função construtora
function teste() {
  return "Função de teste";
}
console.log(teste.prototype); // retorna um objeto (sempre retorna) e, neste caso, com apenas duas propriedades: 
// 1 - "constructor": diz o que construiu o objeto, no caso, a própria função "teste"
// 2 - "__proto__"

function Pessoa(nome) {
  this.nome = nome;
  this.abracar = function() {
    return console.log(`${this.nome} abraçou`);
  }
}

const renard = new Pessoa("Renard", 32);
console.log(Pessoa.prototype);
console.log(renard.prototype); // undefined (protótipo sempre está ligado a uma função)

// FUNCAO.PROTOTYPE
// É possível adicionar novas propriedades e métodos ao objeto prototype (semelhante ao que pode ser feito com objetos)
Pessoa.prototype.andar = function() {
  return `${this.nome} andou`;
};

// Agora, "Pessoa", além das duas propriedades anteriormente mencionadas possui também o método "andar"
console.log(Pessoa.prototype);
console.log(renard); // perceba que, no console, "renard" não tem diretamente o método "andar" que foi inserido mas, se explorar-mos "__proto__", o método estará lá! Justamente por isso, é perfeitamente possível acessar "renard.andar()", que funcionará normalmente.
console.log(renard.andar());

// O método "andar", que foi criado, é uma função, então podemos acessá-la direto também
console.log(Pessoa.prototype.andar()); // "undefined andou". Como não instanciamos o objeto com o operador "new", a propriedade "nome" não existe

// MÉTODO DE FUNÇÃO CONSTRUTORA x MÉTODO DE PROTÓTIPO
// Os métodos já existentes na função construtora estarão disponíveis "de cara", dentro dos objetos instanciados a partir dela
// Os métodos atribuidos ao protótipo não estarão disponíveis "de cara", dentro dos objetos instanciados a partir da função construtora, ainda assim, esses objetos também terão acesso aos métodos do protótipo, como vimos anteriormente, com o método "andar"
function Pessoa2(nome) {
  this.nome = nome;
  this.andar = function() {
    return `${this.nome} andou pelo objeto`;
  }
}

Pessoa2.prototype.andar = function() {
  return `${this.nome} andou pelo protótipo`;
}

const esdras = new Pessoa2("Esdras");
console.log(esdras.andar()); // "Esdras andou pelo objeto"
// Observe que, o método "andar" existe tanto no objeto quando no protótipo!
/* 
************************************************************
EM TESE: 
I - Primeiro o interpretador procura o método dentro do objeto, se não existir, ele procura no protótipo
II - Os métodos presentes na função construtora serão instanciados também, sempre que um objeto novo for instanciado
III - As funções atribuidas ao protótipo só serão criadas uma vez, ainda assim, os novos objetos instanciados também terão acesso a elas
************************************************************
*/

// __PROTO__
// Novos objetos acessam os métodos e propriedades do protótipo através da propriedade "__proto__". Porém, é papel da engine fazer essa busca, não é uma boa prática falar com "__proto__" diretamente
// No exemplo a seguir, ambos os exemplos acessam o mesmo método mas, "__proto__" não tem acesso ao "this.nome", pois, o acesso é feito direto, sem antes passar pelo "constructor" da função construtora
console.log(renard.andar());
console.log(renard.__proto__.andar());

// HERANÇA DE PROTÓTIPO
// O objeto sempre possui acesso aos métodos e propriedades do protótipo construtor, responsável por criar este objeto. Repare que, "renard" possui acesso a métodos nunca definidos aqui no código, mas eles são herdados do protótipo de Object (Object.prototype)
console.log(Object.prototype);
console.log(renard.toString());
console.log(renard.isPrototypeOf());