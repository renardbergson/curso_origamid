// ========================= KEYOF =========================

// ========== KEYOF ==========
// Indica que o dado é uma chave de uma Interface/Tipo 💡
// Retorna sempre strings com os nomes das chaves disponíveis no tipo referido.
// Geralmente utilizado em contextos mais avançados com TypeScript.

interface Produto {
  nome: string;
  preco: string;
}

let chave: keyof Produto; // let chave = "nome" | "preco"
chave = "nome";
chave = "preco";

// ========== TYPEOF ==========
// No JavaScript, "typeof" retorna o tipo do dado como uma string.
// Em TypeScript, "typeof" também pode ser usado para INFERIR o tipo de outro dado ou função! 💡

function coordenadas(x: number, y: number) {
  return { x, y };
}

// Tipo de 'coord' é inferido com base na função 'coordenadas'.
let coord: typeof coordenadas;

// Cenário 1 (Erro)
// coord = "teste";
// 🔴 Erro: O tipo 'string' não pode ser atribuído ao tipo '(x: number, y: number) => { x: number; y: number; }'

// Cenário 2 (Referência correta)
coord = (x: number, y: number) => {
  return {
    x,
    y,
  };
};

// ========== KEYOF NA CONSTRUÇÃO DO QUERYSELECTOR ==========
// Vamos recriar uma lógica parecida com "querySelector()" no TypeScript.
// A ideia é tornar o "seletor" dinâmico, baseado nas chaves da interface "Elementos".

interface Elementos {
  a: HTMLAnchorElement;
  div: HTMLDivElement;
  video: HTMLVideoElement;
  ul: HTMLUListElement;
  body: HTMLBodyElement;
}

// Exemplo inicial 💡
// O seletor é fixo, funcionando apenas para a chave "a" da interface.
/* 
  function seletorElemento(seletor: "a"): Elementos["a"] | null {
    return document.querySelector(seletor);
  } 
*/

// Implementação genérica ✅
// prettier-ignore

// Assinatura 1: Quando o seletor é uma chave da interface "Elementos".
function selecionarElemento<Chave extends keyof Elementos>(seletor: Chave): Elementos[Chave] | null;
// Assinatura 2: Quando o seletor é uma string genérica.
function selecionarElemento(seletor: string): HTMLElement | null;
// Implementação: Atende ambas as assinaturas.
function selecionarElemento(seletor: string): HTMLElement | null {
  return document.querySelector(seletor);
}

// Exemplos de uso.
selecionarElemento("video")?.volume; // Válido: Seleciona um elemento do tipo HTMLVideoElement.
selecionarElemento("a")?.href; // Válido: Seleciona um elemento do tipo HTMLAnchorElement.
selecionarElemento(".teste"); // Válido: Seleciona um elemento genérico com uma classe.

// Por que implementar a assinatura 2 como lógica final e não a assinatura 1?
// 1. A assinatura 1 é restritiva, pois exige que o seletor seja sempre uma chave de "Elementos".
//    Isso exclui seletores genéricos como ".teste". 💡
// 2. A assinatura 2 é mais permissiva, permitindo o uso de seletores genéricos.
// 3. Solução: Manter ambas as assinaturas e uma lógica genérica para abranger todos os casos possíveis. ✅
