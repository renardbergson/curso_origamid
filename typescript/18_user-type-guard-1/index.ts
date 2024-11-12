// ========================= USER TYPE GUARD =========================
// Até agora, utilizamos type guards do tipo built-in (nativos do JavaScript):
// - "typeof" e "instanceof"
// Esses type guards funcionam apenas para tipos primitivos (string, number, etc.)
// e para verificar instâncias de classes.

let value: any;

if (typeof value === "string") {
  // Verifica se 'value' é do tipo primitivo 'string'
}
if (value instanceof Date) {
  // Verifica se 'value' é uma instância da classe 'Date'
}

// ========== ARRAY ==========
// Para introduzir o assunto de Type Predicate, vamos ver um exemplo envolvendo arrays.
// Um array não pode ser verificado com "typeof", pois esse operador retorna "object" para arrays.
// Podemos verificar se o dado é uma "instanceof Array" ou usar o método "Array.isArray()".

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos(json);
}

fetchCursos();

function handleCursos(data: unknown) {
  if (data instanceof Array) {
    console.log("'data' é uma instância de Array");
  }
  if (Array.isArray(data)) {
    console.log("'data' realmente é uma instância de Array");
    // O TypeScript anota o retorno de "isArray" como "arg is any[]".
    // Isso significa que "Array.isArray()" é um método que funciona como um type guard,
    // retornando true ou false para verificar se o argumento é um array.
    // Aqui vemos o conceito de Type Predicate.
  }
}

// ========== USER TYPE GUARDS - TYPE PREDICATE ==========
// Lembre-se: TypeScript NÃO executa JavaScript.
// Apesar de "Array.isArray()" não executar código JS, o TypeScript consegue saber se o parâmetro é um Array.
// Como isso acontece? Graças ao uso de Type Predicate.
//
// User Type Guards são funções criadas pelo usuário para verificar tipos complexos ou validar interfaces.
// Essas funções retornam apenas "true" ou "false" e utilizam Type Predicate (:arg is type),
// indicando qual tipo de argumento a função recebeu quando o retorno é "true".
//
// Esse tipo de função oferece maior flexibilidade e é ideal para tipos que não podem ser
// verificados com "typeof", "instanceof" ou "in".
// Também tornam o código mais limpo e escalável, criando verificações de tipo reutilizáveis.

// Exemplo 1: Sem Type Predicate
function verificarString(data: unknown) {
  if (typeof data === "string") {
    return data.toUpperCase();
  }
}

// Exemplo 2: Com Type Predicate
// Vamos criar uma função separada para verificar se o dado é uma string,
// tornando essa verificação reutilizável e evitando repetição.

function isString(value: unknown): value is string {
  return typeof value === "string";
  /*
    if (typeof value === "string") {
      return true;
    } else {
      return false;
    }
  */
}

function handleData(data: unknown): string {
  if (isString(data)) {
    return data.toUpperCase();
  } else {
    return "Não é uma string!";
  }
}

// Para testar, utilizamos setTimeOut, para mostrar no console só depois do exemplo sobre arrays

setTimeout(() => {
  console.log(handleData("origamid")); // ORIGAMID
}, 2000);

setTimeout(() => {
  console.log(handleData(200)); // Não é uma string
}, 2000);

// ==================== RESUMO DA AULA ====================
/*  
  Built-in Type Guards (typeof, instanceof, in):
    - São nativos do JavaScript e funcionam para tipos primitivos e instâncias de classes.
  
  User Type Guards (Type Predicate):
    - Funções criadas pelo usuário que utilizam o operador "is" para indicar o tipo esperado.
    - Permitem verificações mais complexas e flexíveis, ideais para interfaces e tipos compostos.
    - Tornam o código mais limpo, reutilizável e seguro.
*/
