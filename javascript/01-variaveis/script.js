/*  
  Declaramos variáveis com as palavras reservadas VAR, LET e CONST

  Só as variáveis criadas usando LET e VAR podem ter seus valores sobrescritos
  
  É possível utilizar vírgula, para criar mais de uma variável, sem repetir a palavra-chave desejada

  HOISTING
  É o comportamento de erguer conteúdo para que seja lido no início do script. 
  * Quando se trata de variáveis, o nome delas é erguido e lido primeiro mas o seu valor só é atribuido após a linha onde foram declaradas *
*/

const cidade = "Santa Luzia",
  profissao = "programador",
  faculdade = "ADS";

// EXERCÍCIOS

// Declarar uma variável com o seu nome
const nome = "Renard";

// Declarar uma variável com a sua idade
const idade = 31;

// Declarar uma variável com a sua comida
// favorita e não atribuir valor
var comidaFavorita;

// Atribuir valor a sua comida favorita
comidaFavorita = "Salada de Fruta";

// Declarar 5 variáveis diferentes sem valores
let sistemaOperacional, versao, tamanho, fabricante, dataSuporte;
