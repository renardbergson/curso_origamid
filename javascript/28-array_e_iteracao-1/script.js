// ARRAY E ITERAÇÃO
// 1 - [].forEach(callback (itemAtual, index, arrayOriginal))
// A função callback é executada para cada item da array
// ** modificar qualquer coisa no terceiro argumento, também significa mudar a array original **
// ** o retorno deste método sempre será "undefined" (atribuí-lo a uma variável por exemplo) **
const carros = ["Ford", "Fiat", "Honda"];
console.log(carros);
console.log("--- Iterando em 'carros' com função normal ---");
carros.forEach(function(item, index, array) { // mais comum utilizar arrow function
  console.log(item.toUpperCase());
})

console.log("--- Iterando em 'carros' com arrow function e modificando a array original ---");
const retornoForEach = carros.forEach((item, index, array) => {
  array[index] = "Carro:" + " " + item; // a melhor forma de fazer isso seria usando o método map()
})
console.log(retornoForEach); // undefined
console.log(carros);

// 2 = [].map(callback(itemAtual, index, array))
// Faz a mesma coisa que o forEach() porém, ao invés de retornar undefined, retorna uma nova array
// ** para que não retorne "undefined" também, é necessário que haja um return dentro do map() **
// forEach x map: Se o objetivo for obter uma nova array, sempre utiliza-se o map, assim uma nova array com os valores modificados é retornada e é possível iterar novamente sobre estes valores, ou seja, um map() seguido de outro map().
const numeros = [2, 4, 5, 6, 78];
const numerosX3 = numeros.map(numero => numero * 3); // retorno implícito, uma linha!
console.log(numeros);
console.log(numerosX3);


// o map() pode ser muito útil quando queremos interagir com uma array de objetos, por exemplo, e isolar um valor único de cada objeto 
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => `${aula.min} minutos`); // padrão 1
console.log(tempoAulas);

const pegarNomeAulas = function(aula) { // padrão 2 (a callback numa função externa)
  return aula.nome;
} 
const nomeAulas = aulas.map(pegarNomeAulas);
console.log(nomeAulas);

// 3 - [].reduce(callback(acumulador, item, index, array), valorInicialDoAcumulador)
// Executa uma função callback para cada item da array. Este método possui um valor especial chamado, por padrão, de "acumulador" 
// ** o "acumulador" sempre assumirá o valor de qualquer coisa retornada na iteração seguinte **
// ** diferentemente do map(), o reduce() retorna um valor único, que é o valor final, da última iteração **
const notas = [10, 82, 75];
console.log("PRIMEIRO REDUCE");
const reduceNotas = notas.reduce(function(acumulador, item, index, array) {
  console.log(`${acumulador} - ${item} - ${index} - [${array}]`);
}, 0)
/*  
  0         - 10 - 0 - [10,82,75]
  undefined - 82 - 1 - [10,82,75]
  undefined - 75 - 2 - [10,82,75]

  perceba que o primeiro console.log exibe o valor inicial do acumulador (0) mas, nas iterações seguintes retorna "undefined", justamente porque nas iterações seguintes não há um return e, o retorno padrão de toda função é "undefined", logo, ele não assume nenhum valor posterior
*/
console.log("SEGUNDO REDUCE");
const reduceNotas2 = notas.reduce((acumulador, item, index, array) => {
  console.log(`${acumulador} - ${item} - ${index} - [${array}]`);
  return item;
}, 0)
/*  
  0 - 10 - 0 - [10,82,75]
  10 - 82 - 1 - [10,82,75]
  82 - 75 - 2 - [10,82,75]

  perceba que, agora o acumulador (primeiro valor de cada linha) começa com 0 (valor que inicial definido), mas depois assume os dois primeiros valores de "item" (10, 82), porque é isso que está sendo retornado nas duas iterações seguintes (como são 3 itens, serão apenas 3 iterações)
*/
console.log("TERCEIRO REDUCE");
const reduceNotas3 = notas.reduce((acumulador, item, index, array) => {
  console.log(`${acumulador} - ${item} - ${index} - [${array}]`);
  return acumulador;
}, 0)
/*  
  0 - 10 - 0 - [10,82,75]
  0 - 82 - 1 - [10,82,75]
  0 - 75 - 2 - [10,82,75]

  perceba que, agora o valor retornado é sempre o do acumulador, que possui seu valor inicial zero (0), que posteriormente também é retornado. Desta forma, retornamos sempre o mesmo valor de zero.
*/

// E se retornarmos acumulador + item?
console.log("QUARTO REDUCE (soma dos valores)");
const somaNotas = notas.reduce((acumulador, item) => {
  console.log(`${acumulador} - ${item}`);
  return acumulador + item;
}, 0)
/*  
  0 - 10 (nesta primeira iteração ocorrerá a soma 0 (valor inicial do acumulador) + 10 (item atual) = 10)
  10 - 82 (nesta segunda iteração ocorrerá a soma 10 (valor adquirido pelo acumulador) + 82 (item atual) = 92)
  92 - 75 (nesta última iteração acontecerá a soma: 92 (valor adquirido pelo acumulador) + 75 (item atual) = 167)
*/
console.log(`A soma das notas equivale a: ${somaNotas}`); // soma, após as 3 iterações

// Se omitirmos o valor inicial do acumulador, ele pula a primeira iteração
console.log("QUINTO REDUCE (soma dos valores sem o valor inicial do acumulador)");
const somaNotas2 = notas.reduce((acumulador, item) => {
  console.log(`${acumulador} - ${item}`);
  return acumulador + item;
})
console.log(`A soma das notas continua sendo: ${somaNotas}`);
/*  
  10 - 82
  92 - 75

  percaba que houve apenas 2 retornos, apesar de haver 3 iterações, isso acontece porque o acumulador não recebeu um valor inicial, então ele assume um valor apenas quando houver algo retornado
*/

// O reduce() também pode ser útil para comparar valores
const listaNumeros = [10, 25, 60, 5, 35, 10];
const maiorNumeroLista = listaNumeros.reduce((acumulador, item) => {
  return acumulador > item ? acumulador : item;
  // o valor adquirido pelo acumulador nesta iteração é maior que o do item atual? Se sim, retorne o valor do acumulador como maior número, caso contrário, retorne o valor do item atual
  // ** lembre-se: o acumulador SEMPRE assumirá o valor retornado a cada iteração, por isso que é possível fazer a comparação anterior e, mesmo que o valor retornado seja o do item atual e não do acumulador, na próxima iteração esse mesmo valor será assumido pelo acumulador em uma nova comparação **
})
console.log(`O maior número da lista de números é: ${maiorNumeroLista}`);


/*******************************
  -- Montando Objetos com reduce() --

  O reduce() pode ter diversas aplicações como, por exemplo, construir objetos, strings, arrays, etc.

  Para entender o que será feito a seguir, é necessário entender que podemos inserir ou acessar propriedades em um objeto através de índices, de forma bem semelhante à que é feita quando se trata de arrays. 

  Por exemplo:

  const teste = {};
  teste[0] = "primeiro item";
  teste["um"] = "segundo item" // OU // teste.um = "segundo item"

  ...

  teste = {
    0: "primeiro item",
    um: "segundo item"
  }

  Note que, podemos inserir índices numéricos e também textuais! 
*******************************/ 
const pessoas = [
  {
    nome: "Adriel Robson",
    profissão: "Estudante"
  },
  {
    nome: "Esdras Medeiros",
    profissão: "Estudante"
  },
  {
    nome: "Asriel Lucas",
    profissão: "Vigilante"
  },
  { 
    nome: "Miguel Henrique",
    profissão: "Nenhuma",
  }
]

const objNomePessoas = pessoas.reduce((acumulador, item, index) => {
  acumulador[index] = item.nome;
  // o acumulador inicia como um objeto vazio (opcional) e, a cada iteração é inserido neste objeto o index atual, o qual recebe como valor a propriedade "nome" desse item. Ao final de cada iteração, o próprio acumulador é retornado, incorporando a construção feita na linha 177, de modo que será incrementado nas próximas iterações
  return acumulador;
}, {})

console.log(objNomePessoas);

// 4 - [].reduceRight(callback(acumulador, item, index, array), valorInicialDoAcumulador)
// Funciona de forma bem semelhante ao reduce(), mas itera sobre itens da direita para a esquerda
const frutas = ["Banana", "Pêra", "Uva"];
const stringFrutasInverso = frutas.reduceRight((acumulador, item) => {
  console.log(acumulador);
  acumulador = acumulador + " " + item;
  return acumulador;
})
/* 
  É o mesmo que:

  frutas.reduceRight((acumulador, item) => {
    acumulador = acumulador + " " + item;
    return acumulador;
  }, "")

  Explicação:
  O acumulador não tem um valor inicial (poderia ser uma string vazia, já que estamos retornando strings), por isso, ele incorporará o valor do primeiro item: 
  (ignorando os espaços)

  acumulador = "Uva"
  acumulador = "Uva" + "Pêra"
  acumulador = "Uva Pêra" + "Banana"
  acumulador = "Uva Pêra Banana"

  (será inserido um espaço vazio entre os itens, se e somente se houver um próximo item)
*/
console.log("String de 'frutas' com reduceRight(): " + stringFrutasInverso);

// 4 - [].some(callback(valor, index, array))
// Se pelo menos um item da iteração corresponder ao return da função callback, ele retorna "true"
// ** O loop para, assim que um valor correspondente for encontrado **
const _frutas = ["Abacate", "Cajá", "Uva"];
const temUva = _frutas.some(fruta => fruta === "Uva");
console.log(temUva); // true

// é o mesmo que...
const _numeros = [0, 43, 22, 88, 101, 2];
function temMaiorQueCem(numero) {
  return numero > 100;
}
const verificarMaior = _numeros.some(temMaiorQueCem);
console.log(verificarMaior); // true

// 5 - [].every(callback(valor, index, array))
// Funciona de forma bem semelhante ao método anterior, porém só retorna "true" se todos os itens da iteração corresponderem ao return da função callback
// ** O loop para, assim que um valor correspondente for encontrado **
const anos = ["1992", "2009", "2018", "2019", ""];
const nenhumAnoVazio = anos.every(ano => ano);
console.log(nenhumAnoVazio); // false (tem um ano com aspas vazias, sem espaço)

// é o mesmo que...
const marcas = ["Samsung", "Acer", "HP", "Apple"];
function naoTemLG(marca) {
  return marca != "LG";
}
const verificarMarca = marcas.every(naoTemLG);
console.log(verificarMarca); // true

// 6 - [].find(callback(valor, index, array))
// Retorna o valor da primeira iteração que corresponder ao return da função callback
const numerosAleatorios = [2, 7, 25, 53, 1, 17, 74, 15];
const primeiroNumeroMaiorQue50 = numerosAleatorios.find(numero => numero > 50);
console.log(primeiroNumeroMaiorQue50); // 53

// 7 - [].findIndex(callback(valor, index, array))
// Ao invés do valor, retorna o índice da primeira iteração que corresponder ao return da função callback
function maiorQue50(numero) {
  return numero > 50;
}
const indiceDoPrimeiroNumeroMaiorQue50 = numerosAleatorios.findIndex(maiorQue50);
console.log(indiceDoPrimeiroNumeroMaiorQue50); // 3

// 8 - [].filter(callback(item, index, array))
// Sempre retorna uma nova array com a lista de valores que, durante a iteração, corresponderam ao return da função callback
const nomes = ["Renard", undefined, "Esdras", null, 0, "Asriel", ""];
const apenasNomes = nomes.filter(nome => nome);
console.log(apenasNomes); // ['Renard', 'Esdras', 'Asriel']


// const numerosAleatorios = [2, 7, 25, 53, 1, 17, 74, 15]
function maioresQue20(numero) {
  return numero > 20;
}
const aleatoriosMaioresQue20 = numerosAleatorios.filter(maioresQue20);
console.log(aleatoriosMaioresQue20); // [25, 53, 74]

// Exemplo de uso do filter() em objetos
/*  
  const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]
*/
const aulasGrandes = aulas.filter(aula => {
  return aula.min >= 15;
})
console.log("Aulas que possuem pelo menos 15 minutos de duração:");
console.log(aulasGrandes); // [{nome: 'HTML 1', min: 15}, {nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]