// ====================== DATASET ======================

// HTML Element
// Todo elemento HTML herda propriedades e métodos do construtor "HTMLElement", assim como dos construtores anteriores, um deles é o "dataset"
const h1 = document.querySelector("h1");
console.log(Object.prototype.toString.call(h1)); // [object HTMLHeadingElement]
// HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object

// DATASET
// 1 - Dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo "DOMStringMap". Dentro desse objeto existe uma coleção de chave x valor, com todos os atributos do elemento html que começarem com "data-"
// O dataset facilita a comunicação entre o DOM e o JavaScript, ao passar propriedades específicas para elementos do DOM
console.log(h1.dataset); // DOMStringMap {tipo: 'título principal'}

// 2 - Um mesmo elemento pode receber vários "data-" com seus respectivos valores
const h2 = document.querySelector("h2");
console.log(h2.dataset); // DOMStringMap {tipo: 'título secundário', tag: 'h2'}

// 3 - Como se trata de um objeto, podemos acessar cada propriedade do dataset diretamente
console.log(h2.dataset.tipo); // título secundário

// 4 - Dataset também possibilita selecionar elementos, seja pelos atributos ou pelos valores que recebem, isso é possível através do uso de colchetes []
// As 3 variáveis a seguir selecionam o mesmo elemento
// ** O atributo/valor do dataset funciona como um seletor CSS! ** (verifique arquivo CSS)
const div = document.querySelector("div");
const _div = document.querySelector("[data-elemento]"); // atributo "elemento"
const div_ = document.querySelector("[data-elemento='uma div']"); // atributo "elemento" de valor "uma div"

console.log(div, _div, div_);

// 5 - É perfeitamente possível atribuir novos valores ao dataset de um elemento
div.dataset.novoValor = "testando adição via js";
console.log(div.dataset);

// 6 - Assim como adicionar, é possível excluir valores do dataset 
delete div.dataset.novoValor;
console.log(div.dataset);

// 7 - Data atributes
// Os atributos e valores do dataset podem ser usados como forma de configuração de plugins e interações entre o DOM e o JS
// Exemplo de caso de uso: suponha que pretendemos animar determinado elemento a partir da adição de uma classe que pode representar a direção ou o tempo para início da animação. É possível inserir e obter detalhes da animação a partir de datasets no elemento, usando um loop para recuperar os valores. Quanto ao tempo, poderíamos utilizar funções como "setTimeOut()" ou "setInterval()", utilizando os valores obtidos como base para elas
const LIs = document.querySelectorAll("[data-animacao]");
LIs.forEach(li => {
  li.classList.add(li.dataset.animacao); // "left" ou "right"
  // adiciona em cada LI uma classe com o mesmo valor do dataset 
})

// 8 - Data x Class
// A vantagem de utilizar data atributes é o fato de evitar conflitos com estilos CSS, além de deixar a estrutura da tag mais organizada. Porém, seria perfeitamente possível obter o mesmo funcionamento utilizando classes, apesar de que certamente seria mais trabalhoso
/*  
  <li data-animacao="left" data-tempo="1000"> Item </li>
  
  ...

  <li class="animacao-left tempo-1000"> Item </li>
*/
// Usando classes, talvez fosse preciso cortar as strings, deixando só a direção "left" e o tempo "1000"

// 9 - Nomenclatura
// Por padrão, o JS não aceita traço (-) como caracter válido ao nomear propriedades. Então, qualquer traço (-) inserido via HTML, e caso haja mais palavras em um mesmo dataset, e estando elas separadas por traço (-), este será removido e a letra subsequente se tornará maiúscula, gerando um modelo Camel Case
const section = document.querySelector("[data-anima-scroll]");
console.log(section.dataset); // animaScroll: 'left'
console.log(section.dataset.animaScroll); // 'left'

// O mesmo ocorre no processo inverso!
// O dataset adicionado via JS, utilizando Camel Case, ao chegar no HTML será separado por ífens
section.dataset.tempoTotal = 1000; // camel case
console.log(section); // data-tempo-total="1000"