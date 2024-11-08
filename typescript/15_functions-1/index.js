"use strict";
// ========================= FUNÇÕES =========================
// ========== DEFININDO FUNÇÕES ==========
// Em TypeScript, a "interface" de uma função é o formato da assinatura,
// indicando quais parâmetros e tipo de retorno a função deve ter.
// Declaração com função tradicional:
// Interface: "function somar(a: number, b: number, c?: number): number"
function somar(a, b, c) {
    // Parâmetro "c" é opcional, então usamos uma condição para evitar "undefined"
    return a + b + (c ? c : 0);
}
console.log(somar(3, 4));
// Declaração com arrow function:
// Interface: "const subtrair: (a: number, b: number) => number"
const subtrair = (a, b) => a - b;
console.log(subtrair(10, 5));
const handleClick = (event) => {
    console.log(event.target);
};
document.addEventListener("click", handleClick);
// ========== RETORNO VOID ==========
// No JavaScript, funções sem retorno retornam "undefined" automaticamente.
// Em TypeScript, declaramos essas funções com o tipo de retorno "void",
// que impede o uso incorreto em checagens de valor, por exemplo.
// Exemplo 1:
// Interface: "function pintarTela(cor: string): void"
function pintarTela(cor) {
    document.body.style.backgroundColor = cor;
}
console.log(pintarTela("lightBlue")); // undefined + tela pintada
// Checagem incorreta com void
if (pintarTela("lightBlue")) {
    console.log("Pintou a tela");
}
else {
    // undefined é tratado como "false", mas isso não é o resultado esperado
    console.log("Não pintou");
}
// Exemplo 2
// "void" em outros métodos
// Interface: "(method) HTMLElement.click(): void"
const btn = document.querySelector("button");
btn?.click(); // A função "click()" age, mas não retorna valor algum.
// Exemplo 3
// Qualquer tipo de retorno faz o TS marcar a função como "undefined" em vez de "void"
// Interface: "function isString(element: any): true | undefined"
function isString(element) {
    if (typeof element === "string") {
        return true;
    }
}
console.log(isString("Teste")); // true
console.log(isString(200)); // undefined
function processValue(value) {
    if (typeof value === "string") {
        return `String value: ${value}`;
    }
    else if (typeof value === "number") {
        return value * 2;
    }
}
console.log(processValue("Teste")); // String value: Teste
console.log(processValue(10)); // 20
// Generics:
// Generics são tipos flexíveis que mantêm consistência em toda a função,
// permitindo escrever lógica de forma reutilizável, sem especificar o tipo até o uso.
// Exemplo de generic:
function identity(value) {
    return value;
}
console.log(identity("Teste")); // Teste
console.log(identity(10)); // 10
// Use generics para flexibilidade de tipos em funções e classes,
// ideal para reutilizar lógica sem amarrar a um tipo específico.
