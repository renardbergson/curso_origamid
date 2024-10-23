// ========================= UNION TYPES =========================
// No TypeScript, Union Types (tipos de união) permitem que uma variável ou função possa ter mais de um tipo de valor.
// Isso é útil quando um valor pode assumir diferentes tipos e você deseja explicitar essa flexibilidade no código.
// Para criar um Union Type, usa-se o caractere "|" (pipe) entre os tipos que se deseja combinar.
// Veja alguns exemplos:

// Exemplo I: Variável com múltiplos tipos
let valor: string | number | boolean;
valor = "Olá"; // válido, é uma string
valor = 42; // válido, é um número
valor = true; // válido, é um booleano

// Exemplo II: Variável que alterna entre tipos
let total: string | number = 200; // começa como número
total = "200"; // pode se tornar string posteriormente

// Exemplo III: Função com Union Types e checagem de tipo
function isNumber(value: string | number): boolean {
  return typeof value === "number";
  // é o mesmo que perguntar: "o tipo de 'value' é igual a 'number'?"
  // retorna true se for número, caso contrário false
  // podemos especificar ainda mais que o tipo na saída será um só, anotando o retorno como booleano (:boolean) 💡
}

// Obs: É recomendável que funções retornem sempre o mesmo tipo de dado. 💡
// Um erro comum seria retornar uma string quando o valor não for um número, como no exemplo abaixo:

/*  
  function isNumber(value: string | number) {
    if (typeof value === "number") {
      return true;
    }
    return "Não é um número";  // Erro: função que retorna mais de um tipo de valor
  }

  if (isNumber("200")) {
    console.log("É um número");
  }

  // Nesse cenário, o retorno seria "É um número", pois o valor "Não é um número" é uma string preenchida, e strings preenchidas são consideradas verdadeiras (truthy) em uma verificação. 💡
  // O correto seria garantir que a função retorne apenas booleanos.
*/

console.log(isNumber(200)); // true
console.log(isNumber("200")); // false

// ========================= UNION TYPES + DOM =========================
// Um uso comum de Union Types ocorre ao manipular elementos do DOM, porque o TypeScript não pode garantir que um elemento HTML realmente existe no momento da seleção.
// A seleção pode retornar o elemento ou "null".
// Nesse caso, em JavaScript moderno, é comum usar o recurso "optional chaining" para evitar erros.

// Exemplo: Selecionando um elemento do DOM
// querySelector retorna HTMLButtonElement | null, pois o botão pode ou não existir
const button = document.querySelector("button");

// Usando optional chaining
button?.click(); // A função click será chamada apenas se "button" for diferente de "null" e "undefined"
