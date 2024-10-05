// OBJECT
// Todo objeto é criado com o construtor Object e, por isso, herda as suas propriedades e métodos

// CRIANDO OBJETOS
// 1 - De forma Literal
const descricaoCarro = {
  marca: "Ford",
  ano: 2018
}

console.log(descricaoCarro);

// 2 - Com o operador "new"
const pessoa = new Object({
  nome: "Renard",
  idade: 32
})

console.log(pessoa);

// 3 - Com o método: Object.create(obj, defineProperties)
// Com base em um outro objeto criado anteriormente, cria um novo, que herdará as mesmas propriedades e métodos do anterior
// Na verdade, é mais uma forma de adicionar métodos e propridades ao protótipo de um objeto
const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `O carro da marca ${this.marca} acelerou as ${this.rodas} rodas`
  },
  buzinar() {
    return `O carro da marca ${this.marca} buzinou`
  }
}

const honda = Object.create(carro).init("Honda"); 
// Perceba: retornar o próprio "this" no método "init()" nos possibilita chamar "init()" logo após "Object.create()", o que não seria possível se não houvesse um return ou se o return fosse uma string, por exemplo. 
// ** Lembre-se: ao acessar propriedades/métodos em cadeia o que importa é sempre o que está sendo retornado **

console.log(honda); // os métodos e propriedades de "carro" estão no protótipo de "honda"
console.log(honda.acelerar()); // O carro da marca Honda acelerou as 4 rodas

// OUTROS MÉTODOS DE OBJECT
// 1 - Object.assign(alvo, obj1, obj2...)
// Adiciona ao alvo as propriedades e métodos enumeráveis dos objetos passados como argumentos
// Tem um funcionamento parecido com o método anterior mas, aqui tudo será atribuido diretamente, e não ao protótipo
// ** Modifica o objeto original **
const funcaoAutomovel = {
  acelerar() {
    return "acelerou"
  },
  buzinar() {
    return "buzinou"
  }
}

const moto = {
  rodas: 2,
  capacete: true
}

const _carro = {
  rodas: 4,
  mala: true
}

Object.assign(moto, funcaoAutomovel);
Object.assign(_carro, funcaoAutomovel);

console.log(moto); 
console.log(_carro);
// as propriedades enumeráveis de "funcaoAutomovel" foram adicionadas diretamente em "moto" e "_carro"

// 2 - Object.defineProperties(alvo, propriedades)
// Adiciona novas propriedades ao alvo. A diferença entre adicionar da forma tradicional e desta forma é que aqui é possível definir as características dessas propriedades
// As configurações são passadas dentro de um objeto
// ** IMPORTANTE: uma constante (const) não permite mudar o valor principal de uma variável (por exemplo: alterar uma variável constante, que antes era um objeto para tornar-se uma string), por outro lado, por padrão, nada impede que um objeto atribuido a uma constante tenha suas propriedades alteradas. Então, é neste ponto que o defineProperties() torna-se útil **
// ** por padrão, todas as propriedades começam como "false"! **
const motocicleta = {} 

Object.defineProperties(motocicleta, {
  rodas: {
    value: 2,
    configurable: false, // impede exclusão e mudança de valor
    enumerable: true // torna enumerável (aparecer no console)
  },
  capacete: {
    value: true,
    configurable: true, // (permite a exclusão da propriedade)
    writable: false, // impede mudança de valor 
  }
})

console.log(motocicleta);

delete motocicleta.capacete;

console.log(motocicleta); // {rodas: 2}

// 3 - Object.get() e Object.set()
// Por baixo dos panos, naturalmente, ao invocar uma propriedade (obj.propriedade), a função get() é ativada e, ao definir um valor (obj.propriedade = valor), a função set() é ativada
Object.defineProperties(motocicleta, {
  velocidade: {
    enumerable: true,
    get() {
      return this._velocidade != undefined ? this._velocidade : "valor não definido"
    },
    set(valor) {
      return this._velocidade = "Velocidade da moto: " + valor + " km por hora";
    }
    // criamos uma variável "_velocidade" dentro de "motocicleta", que difere da propriedade "velocidade", a qual estamos configurando, e que get() e set() terão acesso
    // o parâmetro "valor" em set() será preenchido automaticamente, ao atribuirmos um valor para a propriedade "velocidade"
    /*  
      RESUMO:

      Quando acessamos "motocicleta.velocidade", o getter é executado. Ele verifica se a propriedade interna "_velocidade" foi definida e retorna o valor correspondente. Se "_velocidade" não foi definida, retorna "valor não definido".

      Quando atribuimos um valor à propriedade "velocidade" (por exemplo: motocicleta.velocidade = 120), o setter é executado. Ele atribui uma string formatada à propriedade interna "_velocidade", que contém a velocidade da moto e a quilometragem por hora.
    */
  }
})

console.log(motocicleta.velocidade); // valor não definido

motocicleta.velocidade = 10; // método set() é chamado automaticamente e recebe o valor "10" como argumento

console.log(motocicleta.velocidade); // Velocidade da moto: 10 km por hora

// 4 - Object.getOwnPropertyDescriptors(obj)
// Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações, ou seja, se são enumeráveis, se são configuráveis, se têm get e set, etc
console.log(Object.getOwnPropertyDescriptors(Array)); 
console.log(Object.getOwnPropertyDescriptors(Array.prototype));
console.log(Object.getOwnPropertyDescriptor(window, "innerHeight")); // procura no objeto por uma propriedade específica
console.log(Object.getOwnPropertyDescriptors(motocicleta));

// 5 - Object.keys(obj)
// Retorna uma array contendo as chaves de todas as propriedades diretas e enumeráveis do objeto
console.log(Object.keys(Array)); // [] vazio, pois não possui propriedades enumeráveis
// ** obviamente, isso não significa que Array não possui métodos ou propriedades (veja linha 125), significa que esses métodos são úteis em situações específicas, pois não se tratam de características inerentes às arrays como um todo, não são propriedades pelas quais o usuário queira realizar um loop, por exemplo **

// 6 - Object.values(obj)
// Retorna uma array com os valores das propriedades diretas e enumeráveis do objeto
console.log(Object.values(motocicleta));

// 7 - Object.entries(obj)
// Retorna uma array contendo chave e valor das propriedades diretas e enumeráveis do objeto
console.log(Object.entries(motocicleta));

// 8 - Object.getOwnPropertyNames(obj)
// Retorna uma array com todas as propriedades diretas do objeto
// ** Retorna todas as propriedades diretas, mesmo que não sejam enumeráveis **
console.log(Object.getOwnPropertyNames(Array));
// ['length', 'name', 'prototype', 'isArray', 'from', 'fromAsync', 'of']

// 9 - Object.getPrototypeOf()
// Retorna o protótipo do objeto
const frutas = ["Banana", "Maracujá"];
console.log(Object.getPrototypeOf(frutas)); // protótipo de Array
console.log(Object.getPrototypeOf(" ")); // protótipo de String

// 10 - Object.is()
// Verifica se os objetos são iguais
const salada = ["Abacaxi", "Manga", "Uva"];
const salada2 = ["Abacaxi", "Manga", "Uva"];

console.log(Object.is(salada, salada2)); // false 
// (os objetos possuem valores iguais mas não apontam para o mesmo endereço de memória)

// 11 - Object.freeze()
// Impede qualquer mudança nas propriedades do objeto
const veiculo = {
  marca: "Chevrolet",
  ano: 2018
}

Object.freeze(veiculo);
delete veiculo.marca;
veiculo.marca = "Fiat";

console.log(veiculo); // nada mudou
console.log("O objeto 'veiculo' está congelado: " + Object.isFrozen(veiculo)); // true

// 12 - Object.seal()
// Previne a adição de novas propriedades e impede a exclusão das que já existem
// ** Perceba: diferente do método anterior, este permite alterar valores das propriedades já presentes **
const veiculo2 = {
  marca: "Ford",
  ano: 2010
}

Object.seal(veiculo2);
veiculo.rodas = 4;
delete veiculo2.ano;
veiculo2.marca = "Fiat";

console.log(veiculo2); // ...marca: "Fiat" (única mudança)
console.log("O objeto 'veiculo2' está selado: " + Object.isSealed(veiculo2)); // true

// 13 - Object.preventExtensions()
// Previne a adição de novas propriedades
// ** Perceba: aqui a única proibição é adicionar novas propriedades, mas podemos remover e alterar valores
const veiculo3 = {
  marca: "BMW",
  ano: 2015
}

Object.preventExtensions(veiculo3);
veiculo3.rodas = 4;
delete veiculo3.ano;
veiculo3.marca = "Audi";

console.log(veiculo3); // {marca: 'Audi'} (não realizou a mudança da linha 199)
console.log("O objeto 'veiculo3' é extensível: " + Object.isExtensible(veiculo3));

// PROPRIEDADES E MÉTODOS DO PROTÓTIPO
// Já que tudo em JavaScript é objeto, as seguintes propriedades estão disponíveis em todos os objetos criados a partir de funções construtoras. 

// 1 - {}.constructor
// Retorna a função construtora do objeto
const compras = ["Trigo", "Ovos", "Batata Inglesa"];
console.log(compras.constructor); // Array()

const frase = "Isto é uma string";
console.log(frase.constructor); // String()

// 2 - {}.hasOwnProperty("propriedade")
// Verifica se a propriedade é intrínseca do objeto e retorna true ou false
console.log(compras.hasOwnProperty("map")); // false
console.log(Array.hasOwnProperty("map")); // false
console.log(Array.prototype.hasOwnProperty("map")); // true 
// Conclusão: "map" é uma propriedade do protóripo de Array, consequentemente herdade por objetos que já são arrays, que já passaram pelo construtor Array

// 3 - {}.propertyIsEnumerable("propriedade")
console.log(Array.prototype.propertyIsEnumerable("map")); // false 
console.log(window.propertyIsEnumerable("innerHeight")); // true

// 4 - {}.isPrototypeOf(valor)
// Verifica se o objeto é protótipo do valor informado
console.log(Array.prototype.isPrototypeOf(compras)); // "compras", um array já construido, herda as propriedades do protótipo do construtor Array

// 5 - {}.toString()
// Método do construtor Object que retorna o tipo do objeto em questão
// ** O problema é que, a função que nos interessa aqui é a função "toString()" do construtor Object, sendo que objetos do tipo String, Array, etc, também possui esse método, o que faz o JS não chegar até a última cadeia de protótipos. Justamente por isso, para obter o retorno desejado, é bem comum utilizar esse método diretamente em Object: "Object.prototype.toString.call(valor)". **
// Com "call()" passamos um novo "this" para o método

// I
console.log("=========== ARRAY ===========");
const pessoas = ["Renard", "Esdras", "Asriel"];

console.log(pessoas.toString()); // Renard,Esdras,Asriel (método toString() do protótipo de Array)
console.log(typeof pessoas); // object
console.log(Object.prototype.toString.call(pessoas)); // [object Array] ✅ (objeto do tipo Array)

// II
console.log("=========== STRING ===========");
const _frase = "Uma string";

console.log(_frase.toString()); // Uma string (método toString() do protótipo de String)
console.log(typeof _frase); // string
console.log(Object.prototype.toString.call(_frase)); // [object String] ✅ (objeto do tipo String)

// III
console.log("=========== OBJETO ===========");
const _veiculo = {marca: 'Ford'};

console.log(_veiculo.toString()); // [object Object] ✅ (método toString() do protótipo de Object)
console.log(typeof _veiculo); // object
console.log(Object.prototype.toString.call(_veiculo)); // [object Object] ✅ (objeto do tipo Object)

// IV
console.log("=========== FUNÇÃO ===========");
const somar = function(a, b) {
  return a + b;
}

console.log(somar.toString()); 
/* 
  function(a, b) {
    return a + b;
  }
*/ // método toString() do protótipo de Function
console.log(typeof somar); // function
console.log(Object.prototype.toString.call(somar)); // [object Function] ✅ (objeto do tipo Function)

// V
console.log("=========== NODE LIST ===========");
const LIs = document.querySelectorAll("li");

console.log(LIs.toString()) // [object NodeList] ✅
// uma NodeList não possui o método toString() em seu protótipo, mas o protótipo dela é o protótipo de Object que, por sua vez, contém o método correto
console.log(typeof LIs); // object
console.log(Object.prototype.toString.call(LIs)); // [object NodeList] ✅

// RESUMO
console.log("Para resumir: o código 'Object.prototype.toString.call(elemento)' é seguro e pode ser usado de forma geral para retornar corretamente o tipo do objeto que estivermos trabalhando");