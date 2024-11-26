"use strict";
// ========================= KEYOF =========================
let chave; // let chave = "nome" | "preco"
chave = "nome";
chave = "preco";
// ========== TYPEOF ==========
// No JavaScript, "typeof" retorna o tipo do dado como uma string.
// Em TypeScript, "typeof" também pode ser usado para INFERIR o tipo de outro dado ou função! 💡
function coordenadas(x, y) {
    return { x, y };
}
// Tipo de 'coord' é inferido com base na função 'coordenadas'.
let coord;
// Cenário 1 (Erro)
// coord = "teste";
// 🔴 Erro: O tipo 'string' não pode ser atribuído ao tipo '(x: number, y: number) => { x: number; y: number; }'
// Cenário 2 (Referência correta)
coord = (x, y) => {
    return {
        x,
        y,
    };
};
// Implementação: Atende ambas as assinaturas.
function selecionarElemento(seletor) {
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
