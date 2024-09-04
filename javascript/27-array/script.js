// ARRAY
// Armazena uma coleção de elementos, que podem ser strings, outros arrays, booleans, numbers, functions, objects e mais.
// * o tipo de estrutura a seguir não é algo comum no dia a dia, pois quanto mais diferentes forem os dados dentro de uma array, mais lento será o acesso a ela, o exemplo é apenas para mostrar a diversidade que uma array comporta *
const instrumentos = ["Violão", "Guitarra", "Contrabaixo"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"), 
  ["Carro", 
    "Portas", 
    {
      cor: "Azul", 
      preco: 2000
    }
  ], 
  function mostrarMensagem(msg) {
    console.log(msg)
  }
];

dados[2]("veja que forma curiosa de executar a função"); // veja que forma...

// CONSTRUÇÃO DE ARRAYS
// Podemos construir arrays: 
// I - inserindo brackets
// II - com o operador "new" Array()
// III - apenas com o construtor Array
// IV - com o método Array.of()
const array1 = ["sou o primeiro array"];
const array2 = new Array("sou o segundo array");
const array3 = Array("sou o terceiro array");
const array4 = Array.of("sou o quarto array", 10, "15", 41, "12");

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

// Se utilizarmos o construtor Array para criar um item desse tipo e passarmos um número como argumento, o interpretador cria uma array com a mesma quantidade de itens do argumento
const arrayNovo = new Array(10);
const arrayNovo2 = Array(4);

console.log(arrayNovo); // empty x 10
console.log(arrayNovo2); // empty x 4  

// ATRIBUIÇÃO DE VALORES
// É possível substituir (se já existir) ou adicionar itens de forma direta a um índice de array, inclusive considerando espaços vazios!
array3[1] = "sou o valor inserido no terceiro array"; // adicionou no índice 1
array1[10] = "sou o valor inserido no primeiro array, depois de alguns espaços vazios"; // adicionou no índice 10 (empty x 9)
array2[0] = "substitui a mensagem do segundo array";

console.log(array3);
console.log(array2);
console.log(array1);

// Array.from()
// É um método direto do construtor Array, comumente utilizado para transformar array-like objects (objeto que se parece com uma array) em array
const LIs = document.querySelectorAll("li");
const LIsArray = Array.from(LIs);
console.log(LIsArray);

// ARRAY.ISARRAY(n)
// É método direto do construtor de Array que verifica que o elemento passado como argumento é uma array, retornando um boolean
// * mais de um argumento, naturalmente passa a ideia de que estamos informando os itens que pertencerão à array **
console.log(Array.isArray(LIs)); // false
console.log(Array.isArray(LIsArray)); // true

// MÉTODOS E PROPRIEDADES DO PROTOTYPE
// 1 - [].length
// É uma propriedade do protótipo de Array que retorna o tamanho de uma array (numero de índices)
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

console.log(`Tamanho da array "frutas": ${frutas.length}`);
console.log(`Tamanho da primeira string presente na array que está dentro da array "frutas": ${frutas[2][0].length}`);

// 2- [].sort()
// Além de retornar um valor, modifica a array original
// No caso de uma string, reordena o conjunto em ordem alfabética
// No caso de números, ordena os itens pelos primeiros caracteres deles, depois pelo segundo, pelo terceiro, etc
const nomes = ["Renard", "Jailes", "Esdras", "Asriel"]; // Asriel', 'Esdras', 'Jailes', 'Renard'
nomes.sort(); // modificou a array original!
console.log(nomes);

const idades = [32,21,33,43,1,12,8]; // 1, 12, 21, 32, 33, 43, 8
idades.sort() // modificou a array original!
console.log(idades);

// 3 - [].unshift(n) e [].push(n)
// o primeiro método adiciona itens no início da array e retorna o length dela
// o segundo adiciona itens no final da array e retorna o length dela
// ** Bom saber: naturalmente, esses métodos, se atribuidos a uma variável, o que será armazenado é o novo length, que é o retorno, e não a array original. Mesmo assim, a array original será alterada **
const carros = ["Ford", "Fiat", "VW"];
carros.unshift("Honda", "Kia"); // console.log(...) = 5
carros.push("Ferrari"); // console.log(...) = 6

console.log(carros); // 'Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari' (array original modificada)

// 4 - [].shift() e [].pop()
// o primeiro método remove o primeiro item de uma array e retorna ele
// o segundo remove o último item de uma array e retorna ele
// ** para atribuições de variável, observe que o retorno dessas funções é o que será atribuido **
const filmes = ["Matrix", "Senhor dos Anéis", "Anjos da Noite"];
const primeiroFilme = filmes.shift(); // Matrix
const ultimoFilme = filmes.pop(); // Anjos da Noite

console.log(primeiroFilme);
console.log(ultimoFilme);
console.log(filmes);

// 5 - [].reverse()
// inverte a ordem da array e a retorna dessa maneira, alterando também a array original
// ** ao atribuir esse método a uma variável, o retorno será a array modificada, embora a original também seja modificada **
const frase = ["jovens", "tão", "Somos"];
frase.reverse();
console.log(frase);

// 6 - [].splice(index, remover, item1, item2...)
// Com apenas um parâmetro, adiciona itens na array a partir do index informado
// Remove a quantidade de itens passada no segundo parâmetro
// ** o retorno deste método será os itens removidos **
// ** modifica a array original ** 
const carros2 = ["Ford", "Fiat", "VW", "Honda"];
carros2.splice(1, 0, "Kia", "Mustang"); // [], retorno vazio, nada foi removido
console.log(carros2); // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda'], array original modificada

// 7 - [].copyWithin(alvo, inicio, final)
// A partir do alvo (index) informado, este método copia elementos da própria array para o intervalo informado (inicio e fim)
// Se os valores de início e fim forem omitidos, o início será 0 e o fim será o último item
// ** modifica a array original **
const itens = ["Item A", "Item B", "Item C", "Item D", "Item E"];
itens.copyWithin(2, 0, 2);
console.log(itens); // ['Item A', 'Item B', 'Item A', 'Item B', 'Item E'], os itens C e D foram substituidos por A e B
console.log(itens.copyWithin(-1)); // ['Item A', 'Item B', 'Item A', 'Item B', 'Item A'], com um valor negativo -1, o item A foi copiado para a última posição

// 8 - [].fill(valor, inicio, fim)
// Preenche a array com o valor informado, no intervalo compreendido entre o início e o fim
// Se omotido o intervalo, o inicio será 0 e o fim será o último item
// ** modifica a array original **
const itens2 = ["Item 1", "Item 2", "Item 3", "Item 4"];
itens2.fill("Banana");
console.log(itens2); // ['Banana', 'Banana', 'Banana', 'Banana']
itens2.fill("Maçã", 1);
console.log(itens2); // ['Banana', 'Maçã', 'Maçã', 'Maçã'], a partir do item 1
itens2.fill("Pêra", 2, 3);
console.log(itens2); // ['Banana', 'Maçã', 'Pêra', 'Maçã'], intervalo dos itens 2 e 3

// MÉTODOS DE ACESSO
// Nenhum deles modifica a array original!

// 1 - [].concat(valor)
// concatena a array com os valores informados
const transportes1 = ["Barco", "Avião"];
const transportes2 = ["Carro", "Moto"];
const transportes = transportes1.concat(transportes2);
console.log(transportes); // ['Barco', 'Avião', 'Carro', 'Moto']
const maisTransportes = [].concat(transportes1, transportes2, "Bicicleta");
console.log(maisTransportes); // ['Barco', 'Avião', 'Carro', 'Moto', 'Bicicleta']

// 2 - [].includes(valor)
// Verifica se a array possui o valor informado e retorna true ou false
const linguagens = ["html", "css", "js", "php", "python", "js"];
console.log(linguagens.includes("js")); // true

// 3 - [].indexOf(valor)
// Verifica se a array possui o valor informado e retorna o índice do primeiro 
console.log(linguagens.indexOf("js")); // 2

// 4 - [].lastIndexOf(valor)
// Verifica se a array possui o valor informado e retorna o índice do último
console.log(linguagens.lastIndexOf("js")); // 5

// 5 - [].join(separador)
// Junta todos os valores da array e retorna uma string
// Este método é comumente usado junto ao método string.split()
// ** Se nenhum valor for passado para o separador, o padrão é uma vírgula sem espaços. Para evitar isso, podemos inserir uma string vazia sem espaços **
console.log(linguagens.join()); // "html,css,js,php,python,js"
console.log(linguagens.join(" ")); // "html css js php python js"
console.log(linguagens.join(" - ")); // "html - css - js - php - python - js"

const htmlString = "<h2>Título Principal<h2>";
const htmlStringCortada = htmlString.split("h2");
console.log(htmlStringCortada); // ['<', '>Título Principal<', '>']
const htmlTituloPrincipal = htmlStringCortada.join("h1");
console.log(htmlTituloPrincipal); // <h1>Título Principal<h1>
// repare que a lógica é a mesma das linhas 176, 177 e 178, entre as partes da array (htmlStringCortada) foi inserido o que informamos entre parênteses

// 6 - [].slice(inicio, fim)
// Retorna os itens da array no intervalo informado, do início até o fim
// Se o valor final for omotido, o fim será o último item
// ** Se nenhum argumento for passado, a array original é clonada, isso é bastante comum de se ver **
// Lembre-se: fazer referência (n1 = n2) não significa clonar!
const pessoas = ["Renard", "Esdras", "Asriel", "Jailes"];
console.log(pessoas.slice(1, 3)); // ['Esdras', 'Asriel']
console.log(pessoas.slice(2)); // ['Asriel', 'Jailes']
const clonePessoas = pessoas.slice();
console.log(clonePessoas);


// ====================== EXERCÍCIOS ======================
console.log("=================== EXERCÍCIOS ===================");
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

// Remova o primeiro valor de comidas e coloque em uma variável
const primeiraComida = comidas.shift();
console.log(`Primeira comida removida: ${primeiraComida}`);

// Remova o último valor de comidas e coloque em uma variável
const ultimaComida = comidas.pop();
console.log(`Última comida removida: ${ultimaComida}`);

// Adicione 'Arroz' ao final da array
comidas.push("Arroz");
console.log(comidas);

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe", "Batata");
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes);

// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);

// Verifique se Joana faz parte dos estudantes
console.log(`A Joana faz parte do grupo de estudantes? ${estudantes.includes("Joana") ? "SIM" : "NÃO"}`);

// Verifique se Juliana faz parte dos estudantes
console.log(`A Juliana faz parte do grupo de estudantes? ${estudantes.includes("Juliana") ? "SIM" : "NÃO"}`);

// Substitua section por ul e div com li, utilizando split e join
let html = `
  <section>
    <div>Sobre</div>
    <div>Produtos</div>
    <div>Contato</div>
  </section>
`

const novoHtml = html.split("section").join("ul").split("div").join("li");
console.log(novoHtml);

// Remova o último carro mas, antes de remover, salve a array original em outra variável
const _carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const carrosCopia = _carros.slice();
_carros.pop();
console.log(_carros, carrosCopia);