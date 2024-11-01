"use strict";
// ===================== EVENTOS E CALLBACK =====================
// EVENTOS
// Em "addEventListener()", passamos o evento como uma string e uma função de callback.
// A função de callback recebe um parâmetro que faz referência ao evento executado.
const button = document.querySelector("button");
button?.addEventListener("click", handleClick);
function handleClick(event) {
    // MouseEvent: associado a cliques do mouse.
    // PointerEvent: associado a toques em tela touch.
    console.log(event);
    button?.removeEventListener("click", handleClick);
}
// Eventos também podem ser adicionados em elementos fora do DOM, como "window".
window.addEventListener("scroll", handleScroll);
function handleScroll(event) {
    console.log(event);
    window.removeEventListener("scroll", handleScroll);
}
// ===================== EVENT + INSTANCEOF =====================
// Funções que lidam com diferentes tipos de eventos devem receber "Event" como tipo do parâmetro.
// Isso permite flexibilidade ao lidar com múltiplos tipos de eventos em uma mesma função.
document.documentElement.addEventListener("mousedown", ativarMenu);
document.documentElement.addEventListener("touchstart", ativarMenu);
function ativarMenu(event) {
    // Union types podem ser usados, mas podem crescer demais com muitos tipos de eventos.
    if (event instanceof MouseEvent) {
        console.log(event.pageX);
        document.documentElement.removeEventListener("mousedown", ativarMenu);
    }
    if (event instanceof TouchEvent) {
        console.log(event.touches[0].pageX);
        document.documentElement.removeEventListener("touchstart", ativarMenu);
        // event.touches retorna uma lista de toques, pois é possível ter múltiplos toques simultâneos.
    }
}
// ===================== THIS =====================
// Em uma função, "this" faz referência ao objeto que a executou.
// Em JavaScript, o "this" pode ser declarado como primeiro parâmetro sem necessidade de especificá-lo na chamada da função.
button?.addEventListener("click", mostrarTextoBotao);
function mostrarTextoBotao(event) {
    // No modo estrito, "this" em funções da raiz (window) é "undefined" quando chamadas diretamente.
    console.log("Texto do botão: " + this.innerText);
    button?.removeEventListener("click", mostrarTextoBotao);
}
// ===================== THIS x CURRENT TARGET =====================
// Como "this" pode ter diferentes formas, "event.currentTarget" oferece mais segurança ao identificar o alvo do evento.
// Podemos usá-lo com "instanceof" para garantir a tipagem.
button?.addEventListener("click", estilizarBotao);
function estilizarBotao(event) {
    const elemento = event.currentTarget;
    if (elemento instanceof HTMLElement) {
        elemento.style.background = "red";
    }
}
