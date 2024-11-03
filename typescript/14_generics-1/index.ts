// ========================= GENERICS =========================
// Um tipo genérico permite declarar um tipo "parâmetro" em funções, classes ou interfaces.
// Com a sintaxe <Tipo>, podemos indicar o tipo no momento do uso, tornando o código mais flexível e reutilizável.
// Enquanto uma anotação comum define um tipo fixo, como `number` ou `string`,
// um generic permite que o tipo se adapte ao valor fornecido, melhorando a segurança e a reutilização. 💡

// Cenário I: Sem Generics
// Problemas:
// 1. Diversas anotações possíveis para o parâmetro `a`
// 2. TypeScript assume que o retorno pode ser qualquer um dos tipos anotados
// 3. Métodos específicos do tipo não são sugeridos e geram erros
// 4. Resolver o tipo manualmente dentro da função seria trabalhoso (ex.: usando `typeof`)

function mostrarTipoRetorno(a: string | number | boolean) {
  return a;
}

console.log(mostrarTipoRetorno("sou uma string").toUpperCase());
// 🔴 Erro: 'toUpperCase' não existe em 'string | number | boolean'
console.log(mostrarTipoRetorno(200));
console.log(mostrarTipoRetorno(true));

// Como usar Generics?
// Definimos tipos genéricos usando os sinais <>
// Ex.: <Tipo>, onde `Tipo` pode ter qualquer nome, representando o tipo flexível. 💡

// Cenário II: Com Generics
// Vantagens:
// 1. A função sabe, de forma dinâmica, qual será o tipo retornado
// 2. Fornece autocomplete e segurança para o tipo recebido

function mostrarTipoRetorno2<Tipo>(a: Tipo): Tipo {
  return a;
}

console.log(mostrarTipoRetorno2("sou uma string").toUpperCase()); // 🟢 Correto: tipo inferido como string
console.log(mostrarTipoRetorno2(200)); // 🟢 Correto: tipo inferido como number
console.log(mostrarTipoRetorno2(true)); // 🟢 Correto: tipo inferido como boolean

// OU (anotação no retorno)
mostrarTipoRetorno2<string>("sou uma string").toUpperCase();
mostrarTipoRetorno2<number>(200);
mostrarTipoRetorno2<boolean>(true);

/*  
  Como funciona?  
  Quando passamos um tipo específico, TypeScript recria a função com o tipo fornecido:

  - Passando `string`:
    function mostrarTipoRetorno2<string>(a: string): string { return a; }

  - Passando `number`:
    function mostrarTipoRetorno2<number>(a: number): number { return a; }
    
  Anotações explícitas na execução de uma função (linhas 41, 42 e 43) são opcionais aqui, sendo obrigatórias em cenários mais complexos. 💡
*/

// ========================== EXEMPLOS ==========================

// EXEMPLO 1: Retornar os cinco primeiros itens de uma lista qualquer
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const frutas = ["Banana", "Pêra", "Uva", "Laranja", "Limão", "Maçã"];

function cincoPrimeiros<TipoLista>(lista: Array<TipoLista>): TipoLista[] {
  // I - Tipo genérico para o tipo da lista
  // II - Anotação indica o tipo da lista recebida
  // III - Tipo do retorno é opcional (já é derivado do tipo recebido)
  return lista.slice(0, 5);
}

console.log(cincoPrimeiros(numeros)); // 🟢 number[]
console.log(cincoPrimeiros(frutas)); // 🟢 string[]

// EXEMPLO 2: Retornar um valor se ele não for `null`
function notNull<T>(valor: T) {
  return valor !== null ? valor : null;
}
console.log(notNull("Renard")?.toUpperCase()); // 🟢 RENARD

// EXEMPLO 3: Retornar um objeto com o dado recebido e seu tipo
function tipoDado<T>(dado: T): { dado: T; tipo: string } {
  const resultado = { dado, tipo: typeof dado };
  console.log(resultado);
  return resultado;
}

tipoDado("Teste"); // 🟢 {dado: 'Teste', tipo: 'string'}
tipoDado(true); // 🟢 {dado: true, tipo: 'boolean'}
tipoDado([]); // 🟢 {dado: Array(0), tipo: 'object'}
