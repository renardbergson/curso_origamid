// ARRAY
// É um grupo de valores geralmente relacionados. Serve para guardarmos diferentes valores em uma mesma variável.
var videoGames = ["Switch", "PS4", "XBox"]; // array de strings
videoGames[0]; // "Switch"
videoGames[2]; // "XBox"

// MÉTODOS E PROPRIEDADES DE ARRAY
// Seguindo a premissa de que tudo é objeto, ao utilizar ponto, por um momento, um array é envolvido num objeto protótipo Array, do qual herda diversas propriedades
var ultimoItem = videoGames.pop(); // remove o último item e também o retorna
console.log(ultimoItem);

videoGames.push("3DS"); // adiciona ao final do array
var tamanhoDoArray = videoGames.length; // retorna o tamanho (3)

// FOR LOOP
// Faz algo repetidamente, até que uma condição seja satisfeita
// Possui 3 partes: início, condição e incremento/decremento
for (var numero = 0; numero < 10; numero++) {
  console.log(numero); // retorna de 0 a 9 no console
}

// WHILE LOOP
// Segue o mesmo princípio e elementos do anterior, só que numa estrutura diferente
var i = 1;
while (i < 11) {
  // o nome "i" é bastante utilizado, representando a palavra "índex" (índice)
  console.log(`Interação ${i}`);
  i++;
}

// O LOOP IRÁ PARAR, CASO ENCONTRE A PALAVRA "BREAK"
console.log("===== LAÇO 'FOR' UTILIZANDO 'BREAK' =====");
for (var i = 0; i < videoGames.length; i++) {
  // ou "i < 4, porque videoGames tem length 3"
  if (videoGames[i] === "3DS") {
    break;
  }
  console.log(videoGames[i]); // Switch, PS4
}

// FOR EACH
// É um método que recebe como parâmetro uma função de callback, que será executada para cada item de um array. É uma forma mais simples de utilizar loop com arrays (ou array-like)
// pode receber 3 parâmetros: item, index, array
console.log("========== UTILIZANDO 'FOR EACH' ==========");
videoGames.forEach(function teste(item, index, array) {
  console.log(`${item} está na posição ${index}`);
  console.log(array);
  // o atributo "item" será atribuido dinamicamente
});

// EXERCÍCIOS
console.log("=============== EXERCÍCIOS ===============");
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var titulosMundialBrasil = ["1959", "1962", "1970", "1994", "2002"];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
titulosMundialBrasil.forEach(function (ano) {
  console.log(`O Brasil ganhou a copa de ${ano}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(`A última fruta do Array é ${ultimaFruta}`);

/*  
  OU...

  frutas.forEach(function (fruta, index) {
    if (index === frutas.length - 1) {
      ultimaFruta = fruta;
      console.log(`A última fruta do Array é ${ultimaFruta}`);
    }
  });
*/
