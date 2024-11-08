"use strict";
// ========================= FUNÇÕES 2 =========================
// ========== NEVER ==========
// A anotação "never" é usada em funções que lançam um erro ou encerram a aplicação.
// Enquanto "void" indica ausência de retorno, "never" traz benefícios adicionais,
// pois sinaliza claramente que a execução não continuará após a função.
function abortar(mensagem) {
    throw new Error(mensagem);
}
const quadrado = {
    lado: 4,
    perimetro(lado) {
        return lado * 4;
    },
};
function calcularPerimetro(forma) {
    return forma.perimetro(forma.lado);
}
console.log(calcularPerimetro(quadrado)); // Saída: 16
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    return valor.map((item) => item.trim().toLowerCase());
}
// O TypeScript não consegue inferir o tipo de saída sem overloads.
// Com overloads, o retorno é mais específico, baseado na entrada.
console.log(normalizar("  fRonT-eNd ").toUpperCase()); // "front-end"
console.log(normalizar([" baNaNA", " uVa   "])); // ["banana", "uva"]
function $(seletor) {
    return document.querySelector(seletor);
}
// A função "$" aceita apenas os seletores "a" e "video".
$("a");
$("video");
function processValue(value) {
    if (typeof value === "string") {
        return `String value: ${value}`;
    }
    else if (typeof value === "number") {
        return value * 2;
    }
}
console.log(processValue("Teste")); // "String value: Teste"
console.log(processValue(10)); // 20
// Generics:
// Generics permitem escrever funções flexíveis e reutilizáveis,
// mantendo consistência de tipos sem especificar o tipo até o uso.
function identity(value) {
    return value;
}
console.log(identity("Teste")); // "Teste"
console.log(identity(10)); // 10
// Use overloads para capturar variações específicas de chamadas de função.
// Use generics para flexibilidade e reutilização de lógica sem amarrar a um tipo específico.
