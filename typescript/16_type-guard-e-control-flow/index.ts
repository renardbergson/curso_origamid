// ========================= TYPE GUARD - CONTROL FLOW =========================

// ========== TYPE GUARD ==========
// Type Guard (guarda de tipo) é uma técnica utilizada para garantir a Type Safety (segurança de tipo)
// de um dado dentro de um bloco condicional.
// Esse processo é conhecido como Type Narrowing (estreitamento de tipo).

// ========== CONTROL FLOW ==========
// Control Flow (controle de fluxo) é a análise que o TypeScript realiza para deduzir o tipo de dado
// dentro de uma condicional. Isso permite que o TypeScript sugira métodos específicos para
// string, number, boolean, entre outros tipos.

function typeGuard(value: any) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerHTML;
  }
}

console.log(typeGuard("Origamid")); // "ORIGAMID"
console.log(typeGuard(200.4)); // "200"
console.log(typeGuard(document.body)); // Exibe o HTML do <body>

// ========== OPERADOR "IN" ==========
// O operador "in" verifica se um objeto possui uma propriedade com o nome especificado.
// É uma forma de realizar Type Guard, retornando "true" ou "false" e controlando o fluxo de execução.
// Sintaxe: "propriedade" in objeto

// Exemplo 1:
// Verificação simples com "in"
const obj = {
  nome: "Origamid",
};

if ("nome" in obj) {
  console.log("O objeto 'obj' possui a propriedade 'nome'");
}

// Exemplo 2:
// Uso do operador "in" com Type Guard em uma função assíncrona
async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  handleProduto(data);
}

// Interface que define o tipo Produto
interface Produto {
  nome: string;
  preco: number;
  total: number;
}

// Função que utiliza Type Guard com o operador "in" para evitar erros ao acessar propriedades
function handleProduto(data: Produto) {
  // caso a propriedade "total" exista, ela será utilizada
  if ("total" in data) {
    document.body.innerHTML += `
      <hr>
      <div>
        <p>${data.nome}</p>
        <p>R$ ${data.total + 200}</p>
      </div>
    `;
  }

  // mesmo conceito, utilizando if ternário
  document.body.innerHTML += `
    <hr>
    <div>
      <p>${"nome" in data ? data.nome : "Nome não disponível"}</p>
      <p>R$ ${"preco" in data ? data.preco + 200 : "Preço não disponível"}</p>
    </div>
  `;
}

fetchProduto();
