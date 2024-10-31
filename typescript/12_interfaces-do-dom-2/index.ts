// ===================== INTERFACES DO DOM - Exercícios =====================
// 1 - Selecione os elementos HTML com a classe "link".
// 2 - Crie uma função que deve ser executada para cada um dos 3 elementos.
// 3 - Modifique, através da função, o estilo da cor e borda dos 3 elementos.
// 4 - Faça isso utilizando o operador "instanceof" apenas uma vez.

// Seleciona todos os elementos com a classe "link".
const links = document.querySelectorAll(".link");

// Itera sobre cada elemento selecionado.
links.forEach((item) => {
  // Verifica se o item é uma instância de HTMLElement.
  if (item instanceof HTMLElement) {
    estilizarElemento(item);
  }
});

function estilizarElemento(elemento: HTMLElement) {
  console.dir(elemento); // Consultar heranças!
  // Outra forma de visualizar as heranças seria: (console.log(elemento.__proto__.__proto__)) 💡

  // Estiliza o elemento.
  elemento.style.color = "red";
  elemento.style.border = "1px solid red";

  // Aprendizado: 💡
  // Ao manipularmos qualquer elemento do DOM ou utilizarmos um método que retorne uma classe, precisamos entender qual classe gerou esse elemento.
  // Exemplo: se a anotação de "elemento" fosse ":HTMLAnchorElement", o botão não seria estilizado.
  // Por isso, é importante consultar a herança das classes e encontrar um tipo comum para os 3 elementos.

  /*  
    Lembre-se da cadeia de protótipos:
    
    EventTarget ⬅ Node ⬅ Element ⬅ HTMLElement ⬅ HTMLAnchorElement  

    A classe "HTMLElement" é extensível aos 3 elementos e também possui a propriedade "style", 
    que é nosso objetivo aqui! 💡
  */
}
